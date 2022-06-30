use yew::prelude::*;
use patternfly_yew::{Title, Level, Size};
#[function_component(IndexComponent)]
pub fn index() -> Html {
    html! {
        <>
            <title>{"Harmonious - Home"}</title>
            <Title level={Level::H1} size={Size::XXXLarge}>{ "Harmonious" }</Title>
            
        </>
    }
}
