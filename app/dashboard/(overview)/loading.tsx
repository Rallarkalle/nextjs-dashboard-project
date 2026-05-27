import DashboardSkeleton from "../../ui/skeletons";

/* 
This loading page file is a special Next.js tsx file called loading.tsx which enables "streaming" of each component on a page 
(except static components, such as the <SideNav> in this case).

Next.js will automatically recognize/route a file named loading.tsx and implement it when any component on the page is still being loaded, 
thus serving as a placeholder while the component data is being streamed
*/
export default function Loading() {
    return <DashboardSkeleton />;
}