import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@components/ui/card"

export default function Page() {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Hello </CardTitle>
                <CardDescription>Card Description</CardDescription>
                <CardAction>Card Action</CardAction>
            </CardHeader>
            <CardContent>
                <ul className="list-none">
                    <li className="">NextJS</li>
                    <li className="">TailwindCSS</li>
                    <li className="">& ShadCNUI!</li>
                </ul>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}
