use yew::prelude::*;
use patternfly_yew::Bullseye;
#[function_component(AboutComponent)]
pub fn about() -> Html {
    html! {
        <>
            <Bullseye><h1>{"Harmonious"}</h1>
            <h3>{"Harmonious is an open source platform to chat with your friends in servers or direct messages and voice chat in VR or in the desktop app soon™."}</h3>
            <h3>{"Harmonious is customizable; meaning you can create your own themes!"}</h3>
            <h3>{"We created Harmonious because we saw how most other platforms collect their users data, we keep all of our users data completely private, no matter what."}</h3>
            <h3>{"We hope you enjoy using Harmonious!"}</h3>
            </Bullseye>
            </>
    }
}
