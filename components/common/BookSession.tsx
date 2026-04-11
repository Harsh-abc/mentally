
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Field, FieldGroup } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import CTA from "./CTA"
import { useEffect, useState } from "react"


export function BookSession() {
    const [darkNav, setDarkNav] = useState(false);
    useEffect(() => {
        const section = document.getElementById("aboutScroll");

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setDarkNav(true);
                } else {
                    setDarkNav(false);
                }
            },
            {
                threshold: 0.9,
            }
        );

        console.log(observer)

        if (section) observer.observe(section);

        return () => {
            if (section) observer.unobserve(section);
        };
    }, []);

    return (
        <Dialog>
            <form>
                <DialogTrigger asChild>
                    <Button className={`bg-white rounded-full py-5 cursor-pointer ${darkNav
                        ? "bg-(--navText) text-white hover:bg-white"
                        : "bg-white text-(--navText) hover:bg-(--navText) "
                        }`}> <CTA text={'Book A Session'} className={'w-[160px]'} className1={`transition-colors duration-300
      ${darkNav
                                ? "text-white group-hover:text-(--navText)"
                                : "text-(--navText) group-hover:text-white"
                            }`}
                            dotClassName={`transition-colors duration-300
      ${darkNav
                                    ? "bg-white group-hover:bg-(--navText)"
                                    : "bg-(--navText) group-hover:bg-white"
                                }`} /></Button>

                </DialogTrigger>
                <DialogContent className="sm:max-w-sm">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you&apos;re
                            done.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup>
                        <Field>
                            <Label htmlFor="name-1">Name</Label>
                            <Input id="name-1" name="name" defaultValue="Pedro Duarte" />
                        </Field>
                        <Field>
                            <Label htmlFor="username-1">Username</Label>
                            <Input id="username-1" name="username" defaultValue="@peduarte" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Save changes</Button>
                    </DialogFooter>
                </DialogContent>
            </form>
        </Dialog>
    )
}
