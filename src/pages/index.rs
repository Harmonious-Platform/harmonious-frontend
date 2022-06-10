use yew::prelude::*;
use patternfly_yew::{Title, Level, Size, Bullseye};
#[function_component(IndexComponent)]
pub fn index() -> Html {
    html! {
        <>
            <Title level={Level::H1} size={Size::XXXLarge}>{ "Harmonious" }</Title>
            
        </>
    }
}
