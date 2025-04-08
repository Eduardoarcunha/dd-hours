module.exports = {

"[project]/.next-internal/server/app/api/hours/route/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[externals]/next/dist/compiled/next-server/app-route.runtime.dev.js [external] (next/dist/compiled/next-server/app-route.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page.runtime.dev.js [external] (next/dist/compiled/next-server/app-page.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/app/api/hours/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "GET": (()=>GET)
});
async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
        return new Response(JSON.stringify({
            error: 'ID is required'
        }), {
            status: 400
        });
    }
    const csvUrl = 'https://docs.google.com/spreadsheets/d/1HP_gXN9WcsOEmQpi4-ENFi39pS6fjxIzdz31gLZANJc/export?format=csv&gid=1369639130';
    try {
        const res = await fetch(csvUrl);
        const text = await res.text();
        const rows = text.split('\n').map((row)=>row.split(','));
        const headers = rows[0];
        const idIndex = headers.indexOf('ID');
        const nameIndex = headers.indexOf('Name');
        const periodIndex = headers.indexOf('Period');
        const hoursIndex = headers.indexOf('Hours');
        const match = rows.find((row, i)=>i > 0 && row[idIndex] === id);
        if (!match) {
            return new Response(JSON.stringify({
                error: 'No data found'
            }), {
                status: 404
            });
        }
        return new Response(JSON.stringify({
            name: match[nameIndex],
            period: match[periodIndex],
            hours: match[hoursIndex]
        }), {
            status: 200
        });
    } catch (err) {
        console.error(err);
        return new Response(JSON.stringify({
            error: 'Internal error'
        }), {
            status: 500
        });
    }
}
}}),

};

//# sourceMappingURL=%5Broot%20of%20the%20server%5D__c837660d._.js.map