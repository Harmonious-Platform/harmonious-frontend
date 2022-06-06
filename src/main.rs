use yew::prelude::*;
use yew_router::prelude::*;
mod pages;
use crate::pages::{index::IndexComponent, not_found::NotFound};
use patternfly_yew::{Nav, NavItem, Title, Level, Size};
#[derive(Debug, Clone, Copy, PartialEq, Routable)]
enum Route {
    #[at("/")]
    IndexComponent,
    #[not_found]
    #[at("/404")]
    NotFound,
}



fn switch(routes: &Route) -> Html {
    match routes {
        Route::IndexComponent => {
            html! {
                 < IndexComponent /> }
        }
        Route::NotFound => {
            html! {
                <NotFound />
            }
        }

    }
}
#[function_component(Main)]
fn main() -> Html {
    html! {
        <>
            <Nav>
                <ul class={"navbar-ul"}>
                    <NavItem><a href={"/"}><img src={ "https://cdn.discordapp.com/attachments/965680606962929707/965792629835038760/Harmonious_Logo_-_PREVIEW_VERSION.png" } width={ "47" } height= { "47" } id={ "logo" }/></a> </NavItem>
                    <NavItem><Title level={Level::H4} size={Size::XLarge}><b>{"Login"}</b></Title></NavItem>
                    <NavItem><Title level={Level::H4} size={Size::XLarge}><b>{"Sign Up"}</b></Title></NavItem>
                    <NavItem><Title level={Level::H4} size={Size::XLarge}><b>{"Download"}</b></Title></NavItem>
                    <NavItem><Title level={Level::H4} size={Size::XLarge}><b>{"About"}</b></Title></NavItem>
                    </ul>
            </Nav>
            <BrowserRouter>
                <Switch<Route> render={Switch::render(switch)} />
            </BrowserRouter>
        </>
    }
}

fn main() {
    wasm_logger::init(wasm_logger::Config::new(log::Level::Trace));
    yew::start_app::<Main>();
}
