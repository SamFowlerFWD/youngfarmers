"use client";

import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Article } from "@/lib/news-data";

interface AuthorBioProps {
  author: Article['author'];
}

const authorBios: Record<string, string> = {
  "Sarah Mitchell": "Sarah is the Norfolk YFC County Secretary, coordinating events and communications across the county. With a background in agricultural journalism, she's passionate about sharing the stories of young farmers and their achievements.",
  "Michael Davies": "Michael serves as Norfolk YFC Communications Officer, managing social media and member engagement. A former county chairman, he farms beef cattle near Holt and is dedicated to promoting agriculture to wider audiences.",
  "Rachel Cooper": "Rachel coordinates sports, travel and show activities for Norfolk YFC. She manages a mixed farm near Dereham and has represented the county at national competitions. Rachel is committed to creating opportunities for members to develop skills and make lifelong friendships.",
  "Jennifer Hayes": "Jennifer focuses on member engagement and new entrant support at Norfolk YFC. Having made her own transition from non-farming to farming, she understands the challenges new members face and works to ensure everyone feels welcome.",
  "David Bennett": "David is the County Training Officer, developing skills workshops and educational programmes. A fourth-generation farmer from North Norfolk, he's passionate about equipping young farmers with the knowledge and skills needed for successful agricultural careers.",
  "Lucy Harrison": "Lucy serves as County Environment Officer, leading sustainability initiatives and conservation projects. She farms organically near Norwich and is dedicated to demonstrating that productive agriculture and environmental stewardship can work hand in hand.",
  "Tom Richardson": "Tom is the Skills Training Coordinator, organising practical workshops and hands-on learning opportunities. An agricultural engineer by trade, he believes in the value of practical skills and lifelong learning.",
  "Mark Stevens": "Mark is the County Safety Officer, promoting safe working practices across Norfolk's agricultural community. A farm safety consultant with extensive experience, he's committed to reducing accidents and changing safety culture in farming.",
  "Lucy Thompson": "Lucy coordinates county events and competitions as Events Officer. She farms sheep near Fakenham and has been involved with Young Farmers since joining at age 14. Lucy is passionate about creating memorable experiences that bring members together.",
  "Sophie Marshall": "Sophie recently took on the role of County Secretary, supporting administration and member communications. She farms pigs and arable crops near Dereham and brings fresh energy and innovative ideas to the county team."
};

export function AuthorBio({ author }: AuthorBioProps) {
  const bio = authorBios[author.name] || "A dedicated member of the Norfolk YFC team, committed to supporting young farmers across the county.";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-8 border-t"
    >
      <Card className="bg-muted/30">
        <CardContent className="pt-6">
          <div className="flex flex-col sm:flex-row gap-6">
            <Avatar className="h-24 w-24 flex-shrink-0">
              <AvatarFallback className="bg-primary text-white text-2xl">
                {author.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-xl font-bold mb-1">{author.name}</h3>
              <p className="text-sm text-muted-foreground mb-3">{author.role}</p>
              <p className="text-foreground/80 leading-relaxed">{bio}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}
