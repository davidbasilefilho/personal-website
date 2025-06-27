import { Tabs } from "@base-ui-components/react/tabs";

import * as React from "react";

import { cn } from "@/lib/utils";

function TabsBaseUI({
  className,
  value,
  onValueChange,
  ...props
}: React.ComponentProps<typeof Tabs.Root>) {
  return (
    <Tabs.Root
      data-slot="tabs"
      className={cn("flex flex-col gap-2", className)}
      value={value}
      onValueChange={onValueChange}
      {...props}
    />
  );
}

function TabsListBaseUI({
  className,
  ...props
}: React.ComponentProps<typeof Tabs.List>) {
  return (
    <Tabs.List
      data-slot="tabs-list"
      className={cn(
        "bg-muted text-muted-foreground inline-flex h-9 w-fit items-center justify-center rounded-lg p-[3px]",
        className,
      )}
      {...props}
    />
  );
}

function TabsTriggerBaseUI({
  className,
  value,
  ...props
}: React.ComponentProps<typeof Tabs.Tab>) {
  return (
    <Tabs.Tab
      data-slot="tabs-trigger"
      className={cn(
        "data-[selected]:bg-background dark:data-[selected]:text-foreground focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:outline-ring dark:data-[selected]:border-input dark:data-[selected]:bg-input/30 text-foreground dark:text-muted-foreground inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap transition-[color,box-shadow] focus-visible:ring-[3px] focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-[selected]:shadow-sm [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        className,
      )}
      value={value}
      {...props}
    />
  );
}

function TabsContentBaseUI({
  className,
  value,
  ...props
}: React.ComponentProps<typeof Tabs.Panel>) {
  return (
    <Tabs.Panel
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      value={value}
      {...props}
    />
  );
}

export {
  TabsBaseUI as Tabs,
  TabsListBaseUI as TabsList,
  TabsTriggerBaseUI as TabsTrigger,
  TabsContentBaseUI as TabsContent,
};
