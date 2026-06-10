import { Badge } from "../ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "../ui/card";
import { getWorks } from "@/lib/microcms";
import Image from "next/image";
import { SquareArrowOutUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";



const WorksSection = async () => {
  const result = await getWorks();

  return (
    <section id="works" className="bg-muted py-10">
      <div className="max-w-4xl mx-auto p-10">
        <p className="text-sm font-bold text-muted-foreground ml-5">制作実績</p>
        <h2 className="text-2xl font-bold border-l-4 border-primary pl-3 mb-6">
          Works
        </h2>
        <p className="text-muted-foreground mb-6 pl-4">
          これまでの制作実績の一部です。
        </p>

        {!result.ok ? (
          <p>作品が取得できませんでした。再度、時間をおいてお試しください。</p>
        ) : result.works.length === 0 ? (
          <p>表示できる作品がありません。</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-8 justify-center">
            {result.works.map((work) => (
              <Card
                key={work.id}
                className="relative mx-auto w-full max-w-xs min-w-64 h-92 pt-0 bg-white shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative aspect-video w-full">
                  <Image
                    src={work.image}
                    alt={work.title}
                    fill
                    sizes="(min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <CardContent className="flex flex-col flex-1">
                  <CardTitle className="font-bold mb-1">{work.title}</CardTitle>
                  <CardDescription className="text-[11px] mb-2">
                    {work.description}
                  </CardDescription>
                  <div className="flex flex-col flex-1">
                    <div className="flex gap-1 flex-wrap mb-2">
                      {work.skills.map((skill) => (
                        <Badge
                          key={skill}
                          className="bg-primary/10 text-primary shadow text-xs"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex gap-2 text-xs mt-auto pt-2">
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
