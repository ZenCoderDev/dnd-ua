import EquipmentCategoryClient from "./EquipmentCategoryClient";

export default async function EquipmentCategoryPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    return <EquipmentCategoryClient id={id} />;
}