import { Badge } from "../ui/badge";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { getWorks } from "@/lib/microcms";
import Link from "next/link";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";



const WorksSection = async () => {
  const result = await getWorks();

  return (
    <section id="works" className="bg-slate-200 h-screen">
      <div className="max-w-4xl mx-auto p-10">
        <h2 className="text-2xl font-bold">Works</h2>
        {!result.ok ? (
          <p>作品が取得できませんでした。再度、時間をおいてお試しください。</p>
        ) : result.works.length === 0 ? (
          <p>表示できる作品がありません。</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-center">
            {result.works.map((work) => (
              <Card
                key={work.id}
                className="relative mx-auto w-full max-w-xs min-w-64 h-88 pt-0"
              >
                {/* <div className="absolute inset-0 z-30 aspect-video" />
                <img
                  src={work.image}
                  alt={work.title}
                  className="relative z-20 aspect-video w-full object-cover"
                /> */}
                <div className="relative aspect-video w-full">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent>
                  <CardTitle className="font-bold mb-1">{work.title}</CardTitle>
                  <CardDescription className="text-[11px] mb-1">
                    {work.description}
                  </CardDescription>
                  <div className="flex flex-col">
                    <div className="flex gap-1 flex-wrap">
                      {work.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300 shadow text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 text-xs">
                      {work.github && (
                        <a
                          href={work.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-0.5"
                        >
                          <FaGithub size={14} />
                          <span>GitHub</span>
                        </a>
                      )}
                      {work.url && (
                        <a
                          href={work.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-0.5"
                        >
                          <SquareArrowOutUpRight size={14} />
                          <span>Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default WorksSection;
