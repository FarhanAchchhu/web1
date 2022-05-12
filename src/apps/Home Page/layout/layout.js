import TopBarSection from "./topbar";

function LayoutComponent(props){
    return(
        <div>
            <TopBarSection></TopBarSection>
            <main className="">{props.children}</main>
        </div>
    )
}

export default LayoutComponent