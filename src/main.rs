use yew::prelude::*;
use yew_router::prelude::*;
mod pages;
use crate::pages::{index::IndexComponent, not_found::NotFound, about::AboutComponent};
use patternfly_yew::{Nav, NavItem, Title, Level, Size};
#[derive(Debug, Clone, Copy, PartialEq, Routable)]
enum Route {
    #[at("/")]
    IndexComponent,
    #[not_found]
    #[at("/404")]
    NotFound,
    #[at("/about")]
    AboutComponent,
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
        Route::AboutComponent => {
            html! {
                <AboutComponent />
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
                    <NavItem><a class="img" href={"/"}><img id={ "logo" } src={ "harmonious.png" } width={ "47" } height= { "47" }/></a></NavItem>
                    <NavItem><a class="nav" href={"/download"}><Title level={Level::H3} size={Size::XLarge}><b>{"Download"}</b></Title></a></NavItem>
                    <NavItem><a class="nav" href={"/about"}><Title level={Level::H3} size={Size::XLarge}><b>{"About"}</b></Title></a></NavItem>
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
// the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices 
// the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices the voices 