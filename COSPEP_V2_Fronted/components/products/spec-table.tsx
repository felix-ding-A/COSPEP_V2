import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

interface SpecTableProps {
    specs: string[];
    grade?: string;
    usageRate?: string;
    patentNo?: string;
}

export function SpecTable({ specs, grade, usageRate, patentNo }: SpecTableProps) {
    return (
        <div className="rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Specification Item</TableHead>
                        <TableHead>Standard</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* New Technical Fields */}
                    {grade && (
                        <TableRow>
                            <TableCell className="font-medium">Grade</TableCell>
                            <TableCell>{grade}</TableCell>
                        </TableRow>
                    )}
                    {usageRate && (
                        <TableRow>
                            <TableCell className="font-medium">Recommended Usage</TableCell>
                            <TableCell>{usageRate}</TableCell>
                        </TableRow>
                    )}
                    {patentNo && (
                        <TableRow>
                            <TableCell className="font-medium">Patent Number</TableCell>
                            <TableCell>{patentNo}</TableCell>
                        </TableRow>
                    )}

                    {/* Existing Specs array */}
                    {specs && specs.length > 0 ? (
                        specs.map((spec, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    {spec.includes(':') ? spec.split(':')[0] : `Property ${index + 1}`}
                                </TableCell>
                                <TableCell>
                                    {spec.includes(':') ? spec.split(':')[1] : spec}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        (!grade && !usageRate && !patentNo) && (
                            <TableRow>
                                <TableCell colSpan={2} className="text-center text-muted-foreground">
                                    No specifications available.
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
