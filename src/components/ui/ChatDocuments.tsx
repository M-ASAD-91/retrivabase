// import { DocumentCard } from "@/components/DocumentCard";

import { DocumentCard } from "./DocumentCard";

interface Document {
  id: string;
  filename: string;
  type: "pdf" | "docx" | "txt" | "md";
  status: "processed" | "pending" | "error";
}

interface ChatDocumentsProps {
  chatName: string;
  documents: Document[];
}

export const ChatDocuments = ({ chatName, documents }: ChatDocumentsProps) => {
  return (
    <section className="mb-8">
      <h2 className="mb-4 text-lg font-medium text-foreground">{chatName}</h2>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {documents.map((doc) => (
          <DocumentCard
            key={doc.id}
            filename={doc.filename}
            type={doc.type}
            status={doc.status}
          />
        ))}
      </div>
    </section>
  );
};
