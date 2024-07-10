import { Card, CardContent, CardFooter } from "@/components/ui/card";


export default function JodCard() {
  return (
    <Card className="w-[800px] max-h-[500px] relative -top-6 shadow-md">
      <CardContent className="flex p-0 w-full h-full">
        <div className="flex-[40%] bg-[#f8f7f9] rounded-l-md"></div>
        <div className="flex-[60%]  rounded-r-md"></div>
      </CardContent>
      <CardFooter className="flex justify-between"></CardFooter>
    </Card>
  );
}
