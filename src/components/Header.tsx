import { Button } from "./ui/button";
import { Bell, User, LogOut, Settings } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

interface HeaderProps {
  userEmail?: string;
  onLogout: () => void;
}

export function Header({ userEmail, onLogout }: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/60 border-b border-white/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="bg-gradient-to-r from-purple-600 via-blue-500 to-teal-500 bg-clip-text text-transparent font-bold text-2xl">
              HealthMate - Sehat ka Smart Dost
            </h1>
            <p className="text-gray-600 text-sm">AI-Powered Health Tracking</p>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-purple-100/50"
              >
              </Button>
              
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-10 w-10 rounded-full p-0">
                  <Avatar className="h-10 w-10 border-2 border-purple-200 cursor-pointer">
                    <AvatarImage src="" />
                    <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white">
                      <User className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-56 bg-white/95 backdrop-blur-xl" align="end" forceMount>
                <DropdownMenuLabel className="font-normal">
                  <div className="flex flex-col space-y-1">
                    <p className="text-sm font-medium leading-none">My Account</p>
                    <p className="text-xs leading-none text-muted-foreground">
                      {userEmail || "user@example.com"}
                    </p>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <Settings className="mr-2 h-4 w-4" />
                  <span>Settings</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem 
                  className="cursor-pointer text-red-600 focus:text-red-600"
                  onClick={onLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  <span>Logout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
