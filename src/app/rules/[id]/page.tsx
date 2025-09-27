import RulesCategoryClient from "./RulesCategoryClient";

export default async function RulesCategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <RulesCategoryClient id={id} />;
}