import React from "react";
import { Text } from "react-native";
import { shallow } from "enzyme";

import App from "./App";

describe("App Component", () => {
    it("renders Hello World", () => {
        const component = shallow(<App />);
        const texts = component.find(Text);

        const firstText = texts.at(0).render();
        firstText.text().must.equal("Hello World!");

        component.unmount();
    });

    it("renders tap counter", () => {
        const component = shallow(<App />);
        const texts = component.find(Text);

        const firstText = texts.at(2).render();
        firstText.text().must.equal("Taps counter: 0");

        component.unmount();
    });

    it("counts hello world and counter presses", () => {
        const component = shallow(<App />);
        const texts = component.find(Text);

        const firstText = texts.at(0);
        const secondText = texts.at(1);
        firstText.simulate("press");
        component.find(Text).at(2).render().text().must.equal("Taps counter: 1");

        firstText.simulate("press");
        component.find(Text).at(2).render().text().must.equal("Taps counter: 2");

        firstText.simulate("press");
        secondText.simulate("press");
        component.find(Text).at(2).render().text().must.equal("Taps counter: 4");

        secondText.simulate("press");
        secondText.simulate("press");
        secondText.simulate("press");
        component.find(Text).at(2).render().text().must.equal("Taps counter: 7");

        component.unmount();
    });
});
