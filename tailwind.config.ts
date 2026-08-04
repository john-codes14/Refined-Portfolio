import type { Config } from 'tailwindcss';
const config: Config={content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{fontFamily:{sans:['Inter','Space Grotesk','system-ui']},colors:{void:'#050505',primary:'#7C3AED',secondary:'#06B6D4',accent:'#38BDF8'},boxShadow:{glow:'0 0 60px rgba(124,58,237,.25)'}}},plugins:[]}; export default config;
