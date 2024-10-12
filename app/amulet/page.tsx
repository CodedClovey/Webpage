import Image from "next/image";

export default function Page() {
    return <div>
        <Image alt="img" src='/home.png'
        width={200}
        height={200}
        ></Image>
    </div>;
}
