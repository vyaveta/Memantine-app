import invention from "@/sanity/schema/invention"
import { defineConfig } from "sanity"
import { deskTool } from "sanity/desk"

export const config = defineConfig({
    projectId: "3ejsn20b",
    dataset: "production",
    title: "Memantine app",
    apiVersion: "1",
    basePath: "/muhuhuhu",
    plugins: [deskTool()],
    schema: { types: [invention] }
})