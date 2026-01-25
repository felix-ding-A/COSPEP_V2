
import type { StructureBuilder } from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure = (S: StructureBuilder) =>
    S.list()
        .title('Content')
        .items([
            // Singleton Settings
            S.listItem()
                .title('Global Settings')
                .id('settings')
                .child(
                    S.document()
                        .schemaType('settings')
                        .documentId('settings')
                ),
            S.divider(),
            // Filter out singleton from the default list
            ...S.documentTypeListItems().filter(
                (listItem) => listItem.getId() !== 'settings'
            ),
        ])
