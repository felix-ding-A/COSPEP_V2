"use client";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import React from "react";

interface SpecTableProps {
    specs?: string[];
    grade?: string;
    usageRate?: string;
    patentNo?: string;
}

export function SpecTable({ specs, grade, usageRate, patentNo }: SpecTableProps) {
    return (
        <div className="rounded-md border border-white/10 overflow-hidden glass">
            <Table>
                <TableHeader className="bg-white/5">
                    <TableRow className="hover:bg-transparent border-white/10">
                        <TableHead className="text-gray-300">Specification Item</TableHead>
                        <TableHead className="text-gray-300">Standard</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* New Technical Fields */}
                    {grade && (
                        <TableRow className="border-white/10 hover:bg-white/5">
                            <TableCell className="font-medium text-gray-200">Grade</TableCell>
                            <TableCell className="text-gray-300">{grade}</TableCell>
                        </TableRow>
                    )}
                    {usageRate && (
                        <TableRow className="border-white/10 hover:bg-white/5">
                            <TableCell className="font-medium text-gray-200">Recommended Usage</TableCell>
                            <TableCell className="text-gray-300">{usageRate}</TableCell>
                        </TableRow>
                    )}
                    {patentNo && (
                        <TableRow className="border-white/10 hover:bg-white/5">
                            <TableCell className="font-medium text-gray-200">Patent Number</TableCell>
                            <TableCell className="text-gray-300">{patentNo}</TableCell>
                        </TableRow>
                    )}

                    {/* Existing Specs array */}
                    {specs && specs.length > 0 ? (
                        specs.map((spec, index) => (
                            <TableRow key={index} className="border-white/10 hover:bg-white/5">
                                <TableCell className="font-medium text-gray-200">
                                    {spec.includes(':') ? spec.split(':')[0] : `Property ${index + 1}`}
                                </TableCell>
                                <TableCell className="text-gray-300">
                                    {spec.includes(':') ? spec.split(':')[1] : spec}
                                </TableCell>
                            </TableRow>
                        ))
                    ) : (
                        (!grade && !usageRate && !patentNo) && (
                            <TableRow className="border-white/10">
                                <TableCell colSpan={2} className="text-center text-gray-500 py-6">
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
