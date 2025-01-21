import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navBar";

export default function CoursesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer showLetterForm={false}/>
    </>
  );
}
