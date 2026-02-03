'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, RotateCcw, Copy, Check, Palette } from 'lucide-react'

interface ThemeColors {
  primary: string
  secondary: string
  accent: string
  light: string
  dark: string
}

interface ThemeStyle {
  radius: number      // 0-20px
  font: string        // font family key
  fontWeight: string  // heading weight
  buttonStyle: 'rounded' | 'pill' | 'sharp'
  cardStyle: 'flat' | 'shadow' | 'bordered'
  navStyle: 'filled' | 'white'
}

const fontOptions = [
  { id: 'system', name: 'System (Default)', family: 'system-ui, -apple-system, sans-serif' },
  { id: 'geist', name: 'Geist', family: 'var(--font-geist-sans), system-ui, sans-serif' },
  { id: 'inter', name: 'Inter', family: 'Inter, system-ui, sans-serif' },
  { id: 'poppins', name: 'Poppins', family: 'Poppins, system-ui, sans-serif' },
  { id: 'dm-sans', name: 'DM Sans', family: '"DM Sans", system-ui, sans-serif' },
  { id: 'outfit', name: 'Outfit', family: 'Outfit, system-ui, sans-serif' },
  { id: 'plus-jakarta', name: 'Plus Jakarta Sans', family: '"Plus Jakarta Sans", system-ui, sans-serif' },
]

interface ThemePreset {
  id: string
  name: string
  description: string
  feel: string
  colors: ThemeColors
  labels: Record<keyof ThemeColors, string>
}

const presets: ThemePreset[] = [
  {
    id: 'classic',
    name: 'Classic Norfolk',
    description: 'True to the existing logo. Navy and red, traditional feel.',
    feel: 'Heritage, trust',
    colors: { primary: '#1B2A6B', secondary: '#D42B2B', accent: '#F4C430', light: '#F0F4F8', dark: '#1A1A2E' },
    labels: { primary: 'Navy Blue', secondary: 'Norfolk Red', accent: 'Gold', light: 'Cool Grey', dark: 'Deep Navy' },
  },
  {
    id: 'rural-heritage',
    name: 'Rural Heritage',
    description: 'Navy and green as equal partners. Agricultural identity.',
    feel: 'Rural, established',
    colors: { primary: '#1B2A6B', secondary: '#2B7A3D', accent: '#D42B2B', light: '#F2F7F3', dark: '#152218' },
    labels: { primary: 'Norfolk Navy', secondary: 'Heritage Green', accent: 'Brand Red', light: 'Meadow White', dark: 'Forest Dark' },
  },
  {
    id: 'green-first',
    name: 'Green Fields',
    description: 'Green leads the way. Agricultural, countryside-first identity with navy as supporting colour.',
    feel: 'Fresh, outdoorsy',
    colors: { primary: '#2B7A3D', secondary: '#1B2A6B', accent: '#E8B630', light: '#F4F8F0', dark: '#0F2818' },
    labels: { primary: 'Field Green', secondary: 'Norfolk Navy', accent: 'Harvest Gold', light: 'Pasture', dark: 'Deep Green' },
  },
  {
    id: 'bright-green',
    name: 'Spring Growth',
    description: 'Brighter, more modern green. Energetic and youthful while still feeling agricultural.',
    feel: 'Young, energetic',
    colors: { primary: '#2D8B4E', secondary: '#E8523F', accent: '#F5A623', light: '#F0FAF3', dark: '#1C3329' },
    labels: { primary: 'Spring Green', secondary: 'Warm Red', accent: 'Amber', light: 'Mint', dark: 'Forest' },
  },
  {
    id: 'modern-fields',
    name: 'Modern Fields',
    description: 'Teal-green primary for a contemporary feel. Still rural, but sharper and more digital.',
    feel: 'Modern, clean',
    colors: { primary: '#1A7A6D', secondary: '#2C5282', accent: '#DD6B20', light: '#F0FDFA', dark: '#1A2332' },
    labels: { primary: 'Teal', secondary: 'Slate Blue', accent: 'Burnt Orange', light: 'Aqua White', dark: 'Charcoal' },
  },
  {
    id: 'red-lead',
    name: 'Bold Red',
    description: 'Red takes the lead. Confident, bold, attention-grabbing. Navy as the grounding element.',
    feel: 'Bold, passionate',
    colors: { primary: '#C02020', secondary: '#1B2A6B', accent: '#F4C430', light: '#FFF5F5', dark: '#2D1215' },
    labels: { primary: 'Bold Red', secondary: 'Navy', accent: 'Gold', light: 'Rose White', dark: 'Wine Dark' },
  },
  {
    id: 'vibrant-youth',
    name: 'Vibrant Youth',
    description: 'Coral and amber. Fun, approachable, designed to attract younger members.',
    feel: 'Fun, approachable',
    colors: { primary: '#FF5A5F', secondary: '#1B2D6B', accent: '#F5A623', light: '#FFF8F0', dark: '#1A1A2E' },
    labels: { primary: 'Coral', secondary: 'Navy', accent: 'Amber', light: 'Warm Cream', dark: 'Dark Navy' },
  },
  {
    id: 'countryside-sunset',
    name: 'Countryside Sunset',
    description: 'Warm terracotta and golden tones. Evokes Norfolk landscapes and harvest.',
    feel: 'Warm, community',
    colors: { primary: '#C75B39', secondary: '#223B6F', accent: '#E8B630', light: '#FAF5EE', dark: '#2C1810' },
    labels: { primary: 'Terracotta', secondary: 'Twilight Blue', accent: 'Harvest Gold', light: 'Wheat', dark: 'Earth' },
  },
  {
    id: 'earth-tones',
    name: 'Norfolk Earth',
    description: 'Earthy, organic palette. Deep olive and warm brown. Grounded and natural.',
    feel: 'Organic, grounded',
    colors: { primary: '#5C6E3A', secondary: '#8B5E3C', accent: '#D4A843', light: '#F7F5EF', dark: '#2A2618' },
    labels: { primary: 'Olive', secondary: 'Saddle Brown', accent: 'Mustard', light: 'Linen', dark: 'Soil' },
  },
]

function ColorPicker({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-10 h-10 rounded-lg cursor-pointer border border-gray-200 p-0.5"
        />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-xs font-medium text-gray-700 truncate">{label}</p>
        <input
          type="text"
          value={value}
          onChange={(e) => {
            if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) onChange(e.target.value)
          }}
          className="text-[11px] font-mono text-gray-500 w-20 bg-transparent border-b border-dashed border-gray-300 focus:border-gray-500 outline-none"
        />
      </div>
    </div>
  )
}

function LivePreview({ colors, style }: { colors: ThemeColors; style: ThemeStyle }) {
  const { primary, secondary, accent, light, dark } = colors
  const font = fontOptions.find((f) => f.id === style.font)?.family || 'system-ui'
  const r = style.radius
  const btnR = style.buttonStyle === 'pill' ? 999 : style.buttonStyle === 'sharp' ? 2 : r
  const cardClass =
    style.cardStyle === 'shadow'
      ? 'shadow-md border-transparent'
      : style.cardStyle === 'flat'
        ? 'border-transparent bg-opacity-50'
        : 'border border-black/5'
  const headingWeight =
    style.fontWeight === 'extrabold' ? 800 : style.fontWeight === 'bold' ? 700 : 600

  return (
    <div className="overflow-hidden border shadow-lg text-[0px]" style={{ backgroundColor: light, borderRadius: r + 4, fontFamily: font }}>
      {/* Nav */}
      <div
        className="h-11 flex items-center px-4 gap-3"
        style={{
          backgroundColor: style.navStyle === 'filled' ? primary : '#ffffff',
          borderBottom: style.navStyle === 'white' ? `2px solid ${primary}22` : 'none',
        }}
      >
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-white/20" style={style.navStyle === 'white' ? { backgroundColor: `${primary}15` } : {}} />
          <span
            className="text-[11px]"
            style={{
              color: style.navStyle === 'filled' ? '#ffffff' : primary,
              fontWeight: headingWeight,
            }}
          >
            Norfolk YFC
          </span>
        </div>
        <div className="flex gap-3 ml-auto items-center">
          {['About', 'Clubs', 'Events', 'Shop'].map((item) => (
            <span
              key={item}
              className="text-[10px]"
              style={{ color: style.navStyle === 'filled' ? 'rgba(255,255,255,0.7)' : '#666666' }}
            >
              {item}
            </span>
          ))}
          <div
            className="px-2.5 py-1 text-white text-[10px] font-semibold"
            style={{ backgroundColor: secondary, borderRadius: btnR }}
          >
            Join Now
          </div>
        </div>
      </div>

      {/* Hero */}
      <div
        className="h-36 flex items-center justify-center relative"
        style={{ background: `linear-gradient(135deg, ${primary}, ${dark})` }}
      >
        <div className="text-center z-10 px-4">
          <p className="text-white text-base leading-tight" style={{ fontWeight: headingWeight }}>Do More, Be More</p>
          <p className="text-[12px] mt-0.5" style={{ color: accent, fontWeight: headingWeight }}>
            with Norfolk YFC
          </p>
          <p className="text-white/60 text-[9px] mt-1 max-w-[200px] mx-auto">
            Join 500+ members across 16 clubs in Norfolk
          </p>
          <div className="flex gap-2 mt-2.5 justify-center">
            <div
              className="px-3 py-1 text-white text-[9px] font-semibold"
              style={{ backgroundColor: secondary, borderRadius: btnR }}
            >
              Become a Member
            </div>
            <div
              className="px-3 py-1 text-white text-[9px] border border-white/40 font-medium"
              style={{ borderRadius: btnR }}
            >
              Find a Club
            </div>
          </div>
        </div>
      </div>

      {/* Stats bar */}
      <div className="flex" style={{ backgroundColor: secondary }}>
        {[
          ['500+', 'Members'],
          ['16', 'Clubs'],
          ['75+', 'Years'],
          ['100+', 'Events'],
        ].map(([val, label], i) => (
          <div key={i} className="flex-1 text-center py-2 border-r border-white/10 last:border-0">
            <p className="text-white text-[11px] font-bold">{val}</p>
            <p className="text-white/50 text-[8px]">{label}</p>
          </div>
        ))}
      </div>

      {/* Content cards */}
      <div className="p-3 space-y-2.5">
        <div className="flex gap-2">
          {['Upcoming Events', 'Latest News', 'Find a Club'].map((title, i) => (
            <div key={i} className={`flex-1 bg-white p-2.5 ${cardClass}`} style={{ borderRadius: r }}>
              <div
                className="h-8 mb-2"
                style={{
                  borderRadius: Math.max(r - 2, 0),
                  background: i === 0
                    ? `linear-gradient(135deg, ${primary}22, ${secondary}22)`
                    : i === 1
                      ? `linear-gradient(135deg, ${secondary}22, ${accent}22)`
                      : `linear-gradient(135deg, ${accent}22, ${primary}22)`,
                }}
              />
              <p className="text-[10px]" style={{ color: dark, fontWeight: headingWeight }}>{title}</p>
              <p className="text-[8px] text-gray-400 mt-0.5">Sample description text here</p>
              <p
                className="text-[9px] font-semibold mt-1.5 cursor-pointer"
                style={{ color: secondary }}
              >
                Learn more →
              </p>
            </div>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="p-3 flex items-center justify-between"
          style={{ backgroundColor: `${accent}18`, borderLeft: `3px solid ${accent}`, borderRadius: r }}
        >
          <div>
            <p className="text-[10px]" style={{ color: dark, fontWeight: headingWeight }}>Ready to join Norfolk YFC?</p>
            <p className="text-[8px] text-gray-500">Registration is open for the new season</p>
          </div>
          <div
            className="px-2.5 py-1 text-white text-[9px] font-semibold"
            style={{ backgroundColor: accent, borderRadius: btnR }}
          >
            Sign Up
          </div>
        </div>

        {/* Button samples */}
        <div className="flex gap-1.5 pt-1">
          <div className="px-2 py-1 text-white text-[8px] font-medium" style={{ backgroundColor: primary, borderRadius: btnR }}>Primary</div>
          <div className="px-2 py-1 text-white text-[8px] font-medium" style={{ backgroundColor: secondary, borderRadius: btnR }}>Secondary</div>
          <div className="px-2 py-1 text-white text-[8px] font-medium" style={{ backgroundColor: accent, borderRadius: btnR }}>Accent</div>
          <div className="px-2 py-1 text-[8px] font-medium border" style={{ borderColor: primary, color: primary, borderRadius: btnR }}>Outline</div>
        </div>
      </div>

      {/* Footer */}
      <div className="px-3 py-2" style={{ backgroundColor: dark }}>
        <div className="flex justify-between items-center">
          <span className="text-white/40 text-[8px]">Norfolk Federation of Young Farmers Clubs</span>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `${primary}88` }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `${secondary}88` }} />
            <div className="w-3 h-3 rounded-full" style={{ backgroundColor: `${accent}88` }} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function BrandingPage() {
  const [colors, setColors] = useState<ThemeColors>({ ...presets[0].colors })
  const [style, setStyle] = useState<ThemeStyle>({
    radius: 8,
    font: 'system',
    fontWeight: 'bold',
    buttonStyle: 'rounded',
    cardStyle: 'bordered',
    navStyle: 'filled',
  })
  const [activePreset, setActivePreset] = useState<string>(presets[0].id)
  const [copied, setCopied] = useState(false)

  const setColor = useCallback((key: keyof ThemeColors, value: string) => {
    setColors((prev) => ({ ...prev, [key]: value }))
    setActivePreset('')
  }, [])

  const setStyleVal = useCallback(<K extends keyof ThemeStyle>(key: K, value: ThemeStyle[K]) => {
    setStyle((prev) => ({ ...prev, [key]: value }))
  }, [])

  const applyPreset = (preset: ThemePreset) => {
    setColors({ ...preset.colors })
    setActivePreset(preset.id)
  }

  const currentFont = fontOptions.find((f) => f.id === style.font) || fontOptions[0]

  const btnRadius = style.buttonStyle === 'pill' ? 999 : style.buttonStyle === 'sharp' ? 2 : style.radius

  const exportCSS = () => {
    const css = `/* Norfolk YFC Theme */
--primary: ${colors.primary};
--secondary: ${colors.secondary};
--accent: ${colors.accent};
--light: ${colors.light};
--dark: ${colors.dark};
--radius: ${style.radius}px;
--font: ${currentFont.family};
/* Button style: ${style.buttonStyle} | Card style: ${style.cardStyle} | Nav: ${style.navStyle} */`
    navigator.clipboard.writeText(css)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-6 max-w-7xl">
        {/* Header */}
        <div className="mb-6">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-1 mb-3">
            <ArrowLeft className="h-3.5 w-3.5" /> Back to site
          </Link>
          <div className="flex items-center gap-3 mb-3">
            <Image src="/images/norfolk-yfc-logo.png" alt="Norfolk YFC" width={140} height={44} className="h-10 w-auto" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Theme Builder</h1>
          <p className="text-gray-500 text-sm mt-1">
            Pick a starting point below, then adjust any colour. The preview updates live.
          </p>
        </div>

        <div className="grid lg:grid-cols-[340px_1fr] gap-6">
          {/* Left panel: Controls */}
          <div className="space-y-5">
            {/* Presets */}
            <div className="bg-white rounded-xl border p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3 flex items-center gap-1.5">
                <Palette className="h-4 w-4" /> Presets
              </h2>
              <div className="grid grid-cols-1 gap-1.5 max-h-[420px] overflow-y-auto pr-1">
                {presets.map((preset) => (
                  <button
                    key={preset.id}
                    onClick={() => applyPreset(preset)}
                    className={`text-left p-2.5 rounded-lg border transition-all ${
                      activePreset === preset.id
                        ? 'border-blue-400 bg-blue-50 ring-1 ring-blue-200'
                        : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <div className="flex gap-0.5">
                        {Object.values(preset.colors).slice(0, 3).map((c, i) => (
                          <div
                            key={i}
                            className="w-4 h-4 rounded-full border border-black/10"
                            style={{ backgroundColor: c }}
                          />
                        ))}
                      </div>
                      <span className="text-xs font-semibold text-gray-900">{preset.name}</span>
                    </div>
                    <p className="text-[10px] text-gray-500 leading-tight">{preset.description}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Colour pickers */}
            <div className="bg-white rounded-xl border p-4">
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-sm font-semibold text-gray-900">Customise</h2>
                <button
                  onClick={() => applyPreset(presets[0])}
                  className="text-[10px] text-gray-400 hover:text-gray-600 flex items-center gap-1"
                >
                  <RotateCcw className="h-3 w-3" /> Reset
                </button>
              </div>
              <div className="space-y-3">
                <ColorPicker label="Primary" value={colors.primary} onChange={(v) => setColor('primary', v)} />
                <ColorPicker label="Secondary" value={colors.secondary} onChange={(v) => setColor('secondary', v)} />
                <ColorPicker label="Accent" value={colors.accent} onChange={(v) => setColor('accent', v)} />
                <ColorPicker label="Light Background" value={colors.light} onChange={(v) => setColor('light', v)} />
                <ColorPicker label="Dark / Footer" value={colors.dark} onChange={(v) => setColor('dark', v)} />
              </div>

              <button
                onClick={exportCSS}
                className="mt-4 w-full text-xs py-2 rounded-lg border border-gray-200 hover:bg-gray-50 flex items-center justify-center gap-1.5 text-gray-600"
              >
                {copied ? <Check className="h-3 w-3 text-green-600" /> : <Copy className="h-3 w-3" />}
                {copied ? 'Copied!' : 'Copy CSS Variables'}
              </button>
            </div>

            {/* Style controls */}
            <div className="bg-white rounded-xl border p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">Style Options</h2>
              <div className="space-y-4">
                {/* Border radius */}
                <div>
                  <div className="flex justify-between items-center mb-1">
                    <label className="text-xs text-gray-600">Corner Radius</label>
                    <span className="text-[10px] font-mono text-gray-400">{style.radius}px</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="20"
                    value={style.radius}
                    onChange={(e) => setStyleVal('radius', parseInt(e.target.value))}
                    className="w-full h-1.5 rounded-full appearance-none bg-gray-200 accent-blue-600"
                  />
                  <div className="flex justify-between text-[9px] text-gray-400 mt-0.5">
                    <span>Sharp</span>
                    <span>Rounded</span>
                    <span>Very round</span>
                  </div>
                </div>

                {/* Font */}
                <div>
                  <label className="text-xs text-gray-600 block mb-1">Font Family</label>
                  <select
                    value={style.font}
                    onChange={(e) => setStyleVal('font', e.target.value)}
                    className="w-full h-8 rounded-md border border-gray-200 bg-white px-2 text-xs"
                  >
                    {fontOptions.map((f) => (
                      <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                  </select>
                </div>

                {/* Heading weight */}
                <div>
                  <label className="text-xs text-gray-600 block mb-1.5">Heading Weight</label>
                  <div className="flex gap-1.5">
                    {(['semibold', 'bold', 'extrabold'] as const).map((w) => (
                      <button
                        key={w}
                        onClick={() => setStyleVal('fontWeight', w)}
                        className={`flex-1 text-[10px] py-1.5 rounded border transition-colors ${
                          style.fontWeight === w
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {w === 'semibold' ? 'Light' : w === 'bold' ? 'Medium' : 'Heavy'}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Button style */}
                <div>
                  <label className="text-xs text-gray-600 block mb-1.5">Button Shape</label>
                  <div className="flex gap-1.5">
                    {(['sharp', 'rounded', 'pill'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setStyleVal('buttonStyle', s)}
                        className={`flex-1 text-[10px] py-1.5 rounded border transition-colors ${
                          style.buttonStyle === s
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Card style */}
                <div>
                  <label className="text-xs text-gray-600 block mb-1.5">Card Style</label>
                  <div className="flex gap-1.5">
                    {(['flat', 'bordered', 'shadow'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setStyleVal('cardStyle', s)}
                        className={`flex-1 text-[10px] py-1.5 rounded border transition-colors ${
                          style.cardStyle === s
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {s.charAt(0).toUpperCase() + s.slice(1)}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Nav style */}
                <div>
                  <label className="text-xs text-gray-600 block mb-1.5">Header Style</label>
                  <div className="flex gap-1.5">
                    {(['filled', 'white'] as const).map((s) => (
                      <button
                        key={s}
                        onClick={() => setStyleVal('navStyle', s)}
                        className={`flex-1 text-[10px] py-1.5 rounded border transition-colors ${
                          style.navStyle === s
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'border-gray-200 hover:bg-gray-50'
                        }`}
                      >
                        {s === 'filled' ? 'Coloured' : 'White'}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Palette strip */}
            <div className="bg-white rounded-xl border p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-2">Current Palette</h2>
              <div className="flex gap-1 h-10 rounded-lg overflow-hidden">
                <div className="flex-1" style={{ backgroundColor: colors.primary }} />
                <div className="flex-1" style={{ backgroundColor: colors.secondary }} />
                <div className="flex-1" style={{ backgroundColor: colors.accent }} />
                <div className="flex-1" style={{ backgroundColor: colors.light }} />
                <div className="flex-1" style={{ backgroundColor: colors.dark }} />
              </div>
              <div className="flex gap-1 mt-1.5">
                {Object.entries(colors).map(([key, val]) => (
                  <p key={key} className="flex-1 text-[9px] text-gray-400 text-center font-mono">{val}</p>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel: Live preview */}
          <div className="space-y-5">
            <div className="bg-white rounded-xl border p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">Live Preview</h2>
              <LivePreview colors={colors} style={style} />
            </div>

            {/* Element samples */}
            <div className="bg-white rounded-xl border p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">Component Samples</h2>

              <div className="grid md:grid-cols-2 gap-4" style={{ fontFamily: currentFont.family }}>
                {/* Buttons */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">Buttons</p>
                  <div className="flex flex-wrap gap-2">
                    <button className="px-4 py-2 text-white text-xs font-medium" style={{ backgroundColor: colors.primary, borderRadius: btnRadius }}>
                      Primary Button
                    </button>
                    <button className="px-4 py-2 text-white text-xs font-medium" style={{ backgroundColor: colors.secondary, borderRadius: btnRadius }}>
                      Secondary
                    </button>
                    <button className="px-4 py-2 text-white text-xs font-medium" style={{ backgroundColor: colors.accent, borderRadius: btnRadius }}>
                      Accent
                    </button>
                    <button className="px-4 py-2 text-xs font-medium border-2" style={{ borderColor: colors.primary, color: colors.primary, borderRadius: btnRadius }}>
                      Outline
                    </button>
                  </div>
                </div>

                {/* Badges */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">Badges & Tags</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2.5 py-1 text-white text-[10px] font-semibold" style={{ backgroundColor: colors.primary, borderRadius: 999 }}>
                      Senior Club
                    </span>
                    <span className="px-2.5 py-1 text-white text-[10px] font-semibold" style={{ backgroundColor: colors.secondary, borderRadius: 999 }}>
                      Active Member
                    </span>
                    <span className="px-2.5 py-1 text-white text-[10px] font-semibold" style={{ backgroundColor: colors.accent, borderRadius: 999 }}>
                      New Event
                    </span>
                    <span
                      className="px-2.5 py-1 text-[10px] font-semibold border"
                      style={{ borderColor: colors.primary, color: colors.primary, borderRadius: 999 }}
                    >
                      Countrysider
                    </span>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">Card Styles</p>
                  <div className="flex gap-2">
                    <div className="flex-1 p-3 border bg-white" style={{ borderRadius: style.radius }}>
                      <div className="h-1.5 w-12 mb-1.5" style={{ backgroundColor: colors.primary, borderRadius: style.radius }} />
                      <div className="h-1 w-full bg-gray-100 rounded mb-1" />
                      <div className="h-1 w-3/4 bg-gray-100 rounded" />
                      <p className="text-[9px] mt-2 font-medium" style={{ color: colors.secondary }}>Read more →</p>
                    </div>
                    <div className="flex-1 p-3 bg-white shadow-md" style={{ borderRadius: style.radius }}>
                      <div className="h-1.5 w-12 mb-1.5" style={{ backgroundColor: colors.secondary, borderRadius: style.radius }} />
                      <div className="h-1 w-full bg-gray-100 rounded mb-1" />
                      <div className="h-1 w-3/4 bg-gray-100 rounded" />
                      <p className="text-[9px] mt-2 font-medium" style={{ color: colors.primary }}>Read more →</p>
                    </div>
                    <div className="flex-1 p-3 bg-white border-l-4" style={{ borderLeftColor: colors.accent, borderRadius: style.radius }}>
                      <div className="h-1.5 w-12 mb-1.5" style={{ backgroundColor: colors.accent, borderRadius: style.radius }} />
                      <div className="h-1 w-full bg-gray-100 rounded mb-1" />
                      <div className="h-1 w-3/4 bg-gray-100 rounded" />
                      <p className="text-[9px] mt-2 font-medium" style={{ color: colors.accent }}>Read more →</p>
                    </div>
                  </div>
                </div>

                {/* Nav styles */}
                <div>
                  <p className="text-xs text-gray-500 mb-2">Navigation Styles</p>
                  <div className="space-y-2">
                    <div className="flex items-center h-8 px-3" style={{ backgroundColor: colors.primary, borderRadius: style.radius }}>
                      <span className="text-white text-[10px] font-bold">Norfolk YFC</span>
                      <div className="flex gap-2 ml-auto">
                        <span className="text-white/60 text-[9px]">About</span>
                        <span className="text-white/60 text-[9px]">Events</span>
                      </div>
                      <div className="ml-2 px-2 py-0.5 text-white text-[8px]" style={{ backgroundColor: colors.secondary, borderRadius: btnRadius }}>Join</div>
                    </div>
                    <div className="flex items-center h-8 px-3 bg-white border" style={{ borderRadius: style.radius }}>
                      <span className="text-[10px] font-bold" style={{ color: colors.primary }}>Norfolk YFC</span>
                      <div className="flex gap-2 ml-auto">
                        <span className="text-gray-500 text-[9px]">About</span>
                        <span className="text-gray-500 text-[9px]">Events</span>
                      </div>
                      <div className="ml-2 px-2 py-0.5 text-white text-[8px]" style={{ backgroundColor: colors.primary, borderRadius: btnRadius }}>Join</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Typography */}
            <div className="bg-white rounded-xl border p-4">
              <h2 className="text-sm font-semibold text-gray-900 mb-3">Typography Samples</h2>
              <div className="grid md:grid-cols-2 gap-4" style={{ fontFamily: currentFont.family }}>
                <div className="space-y-2">
                  <h3 className="text-2xl" style={{ color: colors.dark, fontWeight: style.fontWeight === 'extrabold' ? 800 : style.fontWeight === 'bold' ? 700 : 600 }}>Norfolk Young Farmers</h3>
                  <p className="text-sm" style={{ color: colors.dark }}>
                    Do More, Be More with{' '}
                    <span style={{ color: colors.primary, fontWeight: style.fontWeight === 'extrabold' ? 800 : style.fontWeight === 'bold' ? 700 : 600 }}>Norfolk YFC</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Join over 500 young people aged 10-28 across 16 clubs in Norfolk.
                    We offer competitions, social events, travel opportunities, and lifelong friendships.
                  </p>
                  <div className="flex gap-2 pt-1">
                    <span className="text-xs font-semibold" style={{ color: colors.primary }}>Link text</span>
                    <span className="text-xs font-semibold" style={{ color: colors.secondary }}>Link text</span>
                    <span className="text-xs font-semibold" style={{ color: colors.accent }}>Link text</span>
                  </div>
                </div>
                <div className="space-y-1.5 text-sm" style={{ color: colors.dark }}>
                  <p className="text-xl" style={{ color: colors.primary, fontWeight: style.fontWeight === 'extrabold' ? 800 : style.fontWeight === 'bold' ? 700 : 600 }}>Heading 1</p>
                  <p className="text-lg" style={{ color: colors.primary, fontWeight: style.fontWeight === 'extrabold' ? 700 : style.fontWeight === 'bold' ? 600 : 500 }}>Heading 2</p>
                  <p className="text-base" style={{ color: colors.secondary, fontWeight: style.fontWeight === 'extrabold' ? 600 : 500 }}>Heading 3</p>
                  <p className="text-sm font-medium">Body text - The quick brown fox jumps over the lazy dog</p>
                  <p className="text-xs text-gray-500">Caption text - Supporting information</p>
                  <p className="text-xs font-mono" style={{ color: colors.accent }}>NYFC-SR-A1B2C3 (Membership number)</p>
                </div>
              </div>
            </div>

            {/* Notes */}
            <div className="text-center text-xs text-gray-400 pb-6">
              <p>Adjust any colour using the pickers on the left. Click a preset to start from a different palette.</p>
              <p className="mt-1">Once you pick a direction, the full site will be updated to match.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
