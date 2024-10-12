import Image from "next/image";

export default function Page() {
    return <div>
        <Image alt="img" src='/favicon.ico'
        width={200}
        height={200}
        ></Image>
    </div>;
}
