import Image from "next/image";
import { Certificate } from "@/lib/certificate-data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CalendarIcon, User } from "lucide-react";

interface CertificateCardProps {
    certificate: Certificate;
}

export function CertificateCard({ certificate }: CertificateCardProps) {
    const displayImage = Array.isArray(certificate.image)
        ? certificate.image[0]
        : certificate.image;

    return (
        <Card className="flex flex-col h-full overflow-hidden hover:shadow-lg transition-all duration-300 border-border/50 bg-card/50 hover:bg-card group">
            <div className="relative aspect-video w-full overflow-hidden bg-muted">
                <Image
                    src={displayImage}
                    alt={certificate.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
            </div>
            <CardHeader className="p-4 pb-2 space-y-2">
                {/* Host */}
                {certificate.host && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4 shrink-0" />
                        <span className="truncate">{certificate.host}</span>
                    </div>
                )}

                {/* Date  */}
                {certificate.startDate && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CalendarIcon className="h-4 w-4 shrink-0" />
                        <span>{certificate.startDate}</span>
                    </div>
                )}

                {/* Title */}
                <h3 className="font-semibold text-lg leading-tight pt-1">
                    {certificate.title}
                </h3>
            </CardHeader>
            <CardContent className="p-4 pt-0 flex-grow flex flex-col justify-end">
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                    {certificate.tools?.slice(0, 3).map((tool) => (
                        <Badge key={tool} variant="secondary" className="text-[10px] px-1.5 py-0">
                            {tool}
                        </Badge>
                    ))}
                    {certificate.tools && certificate.tools.length > 3 && (
                        <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                            +{certificate.tools.length - 3}
                        </Badge>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}
