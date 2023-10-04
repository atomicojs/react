const ID = Symbol.for("@atomico/react/options");
globalThis[ID] = globalThis[ID] || {
    ssr: true,
};
export default globalThis[ID];
