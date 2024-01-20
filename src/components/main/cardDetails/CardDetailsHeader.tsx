import Link from "next/link";

const CardDetailsHeader = () => {
    return (
        <div className="flex items-center gap-4">
            <h3 className="font-semibold">Card Details</h3>
            <Link
                href="#"
                className="ml-auto text-xs font-bold text-primary underline"
            >
                Generate Number
            </Link>
            <Link href="#" className="text-xs font-bold text-primary underline">
                Edit
            </Link>
        </div>
    );
};

export default CardDetailsHeader;
