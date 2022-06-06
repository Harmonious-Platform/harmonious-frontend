use yew::prelude::*;
use patternfly_yew::{Title, Level, Size, Bullseye};
#[function_component(NotFound)]
pub fn not_found() -> Html {
    html! {
        <>
            <Bullseye>
            <div>
                <Title level={Level::H1} size={Size::XXXXLarge}>{ "Uhhh.... Nothing to see here" }</Title>
                <Title level={Level::H1} size={Size::XXXXLarge}>{ "Error Code 404" }</Title>
                <i><Title level={Level::H3} size={Size::XXLarge}>{ "You can click the logo at the top to go home :)" }</Title></i>
            </div>
            </Bullseye>
        </>
    }
}
