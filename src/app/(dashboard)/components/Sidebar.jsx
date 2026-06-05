import MainLogo from "@/components/MainLogo";
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";
import { Button, Drawer } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
    const navItems = [
        { icon: House, label: "Home" },
        { icon: Magnifier, label: "Search" },
        { icon: Bell, label: "Notifications" },
        { icon: Envelope, label: "Messages" },
        { icon: Person, label: "Profile" },
        { icon: Gear, label: "Settings" },
    ];
    const navLinks = (
        <nav className="flex flex-col gap-1">
            {navItems.map((item) => (
                <button
                    key={item.label}
                    className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                    type="button"
                >
                    <item.icon className="size-5 text-muted" />
                    {item.label}
                </button>
            ))}
        </nav>
    );

    return (
        <>
            <aside className="hidden lg:flex flex-col justify-between w-64 bg-white shrink-0 border-r border-default p-4">
                <div>
                    {/* LOGO */}
                    <MainLogo/>
                    <div className="mt-5">
                        {navLinks}
                    </div>
                </div>
                <MainLogo />
            </aside>
            <Drawer>
                <Button className={`lg:hidden`} variant="secondary">
                    <Bars />
                    Menu
                </Button>
                <Drawer.Backdrop>
                    <Drawer.Content placement="left">
                        <Drawer.Dialog>
                            <Drawer.CloseTrigger />
                            <Drawer.Header>
                                <Drawer.Heading>Navigation</Drawer.Heading>
                            </Drawer.Header>
                            <Drawer.Body>
                                {navLinks}
                            </Drawer.Body>
                        </Drawer.Dialog>
                    </Drawer.Content>
                </Drawer.Backdrop>
            </Drawer>
        </>
    );
};

export default Sidebar;