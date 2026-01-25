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
}

export function SpecTable({ specs }: SpecTableProps) {
    // Parsing simple string specs into a table for display
    // Assuming specs in Sanity are strings like "Assay: 98%" or just "98%"
    // For this trade requirement: "Item | Spec | Method"
    // If the data is just an array of strings, we'll display them simply for now.
    // Ideally, we'd adjust the schema to be an object list, but sticking to the user's current schema.

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
                    {specs && specs.length > 0 ? (
                        specs.map((spec, index) => (
                            <TableRow key={index}>
                                <TableCell className="font-medium">
                                    {/* Attempt to split if it contains colon, else just show full string */}
                                    {spec.includes(':') ? spec.split(':')[0] : `Purity/Grade ${index + 1}`}
                                </TableCell>
                                <TableCell>
                                    {spec.includes(':') ? spec.split(':')[1] : spec}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        <TableRow>
                            <TableCell colSpan={2} className="text-center text-muted-foreground">
                                No specifications available.
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    );
}
