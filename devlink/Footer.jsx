"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _interactions from "./interactions";
import * as _utils from "./utils";
import _styles from "./Footer.module.css";

const _interactionsData = JSON.parse(
  '{"events":{"e":{"id":"e","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-203"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"379e97c9-568b-f972-ebc0-ef36905bdbf3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"379e97c9-568b-f972-ebc0-ef36905bdbf3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661724998922},"e-2":{"id":"e-2","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-201"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"379e97c9-568b-f972-ebc0-ef36905bdbf3","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"379e97c9-568b-f972-ebc0-ef36905bdbf3","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661724998922},"e-3":{"id":"e-3","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-199"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"379e97c9-568b-f972-ebc0-ef36905bdc0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"379e97c9-568b-f972-ebc0-ef36905bdc0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661724998922},"e-4":{"id":"e-4","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-202"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"379e97c9-568b-f972-ebc0-ef36905bdc0b","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"379e97c9-568b-f972-ebc0-ef36905bdc0b","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661724998922},"e-5":{"id":"e-5","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-204"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"379e97c9-568b-f972-ebc0-ef36905bdc21","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"379e97c9-568b-f972-ebc0-ef36905bdc21","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661724998922},"e-6":{"id":"e-6","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-198"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"379e97c9-568b-f972-ebc0-ef36905bdc21","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"379e97c9-568b-f972-ebc0-ef36905bdc21","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661724998922},"e-7":{"id":"e-7","name":"","animationType":"preset","eventTypeId":"DROPDOWN_OPEN","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-200"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"379e97c9-568b-f972-ebc0-ef36905bdc34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"379e97c9-568b-f972-ebc0-ef36905bdc34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661724998922},"e-8":{"id":"e-8","name":"","animationType":"preset","eventTypeId":"DROPDOWN_CLOSE","action":{"id":"","actionTypeId":"GENERAL_START_ACTION","config":{"delay":0,"easing":"","duration":0,"actionListId":"a-2","affectedElements":{},"playInReverse":false,"autoStopEventId":"e-197"}},"mediaQueries":["main","medium","small","tiny"],"target":{"id":"379e97c9-568b-f972-ebc0-ef36905bdc34","appliesTo":"ELEMENT","styleBlockIds":[]},"targets":[{"id":"379e97c9-568b-f972-ebc0-ef36905bdc34","appliesTo":"ELEMENT","styleBlockIds":[]}],"config":{"loop":false,"playInReverse":false,"scrollOffsetValue":null,"scrollOffsetUnit":null,"delay":null,"direction":null,"effectIn":null},"createdOn":1661724998922}},"actionLists":{"a":{"id":"a","title":"Open dropdown accordion","actionItemGroups":[{"actionItems":[{"id":"a-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":true,"id":"658d81d8f62d79d1e93b7413|911bce20-02ca-e79a-e8c6-c2f63b5de7ad"},"heightValue":70,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"","duration":500,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["130e41da-d124-b81a-8d23-bcd7db9dc06e"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]},{"actionItems":[{"id":"a-n-3","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"658d81d8f62d79d1e93b7413|911bce20-02ca-e79a-e8c6-c2f63b5de7ad"},"widthUnit":"PX","heightUnit":"AUTO","locked":false}},{"id":"a-n-4","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["130e41da-d124-b81a-8d23-bcd7db9dc06e"]},"zValue":180,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":true,"createdOn":1661340252432},"a-2":{"id":"a-2","title":"Close dropdown accordion","actionItemGroups":[{"actionItems":[{"id":"a-2-n","actionTypeId":"STYLE_SIZE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":true,"id":"658d81d8f62d79d1e93b7413|911bce20-02ca-e79a-e8c6-c2f63b5de7ad"},"heightValue":70,"widthUnit":"PX","heightUnit":"px","locked":false}},{"id":"a-2-n-2","actionTypeId":"TRANSFORM_ROTATE","config":{"delay":0,"easing":"ease","duration":400,"target":{"useEventTarget":"CHILDREN","selector":".dropdown-chevron","selectorGuids":["130e41da-d124-b81a-8d23-bcd7db9dc06e"]},"zValue":0,"xUnit":"DEG","yUnit":"DEG","zUnit":"deg"}}]}],"useFirstGroupAsInitialState":false,"createdOn":1661340252432}},"site":{"mediaQueries":[{"key":"main","min":992,"max":10000},{"key":"medium","min":768,"max":991},{"key":"small","min":480,"max":767},{"key":"tiny","min":0,"max":479}]}}'
);

export function Footer({ as: _Component = _Builtin.Block }) {
  _interactions.useInteractions(_interactionsData, _styles);

  return (
    <_Component className={_utils.cx(_styles, "section")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "footer")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "footer-wrap")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "list-wrapper")}
            tag="div"
          >
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "dropdown")}
              data-w-id="379e97c9-568b-f972-ebc0-ef36905bdbf3"
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "dropdown-toggle")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-8")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "dropdown-icon-closed")}
                    tag="h4"
                  >
                    <_Builtin.Strong>{""}</_Builtin.Strong>
                  </_Builtin.Heading>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-15")}
                    tag="h5"
                  >
                    {"Asiakaspalvelu"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "dropdown-chevron")}
                  tag="h4"
                >
                  {""}
                </_Builtin.Heading>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "dropdown-list")}
                tag="nav"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-9")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    {"Ma–Pe 9.00–16.00"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    {"Puh"}
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-3")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"044 337 9610"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-3")}
                      button={false}
                      block=""
                      options={{
                        href: "mailto:asiakaspalvelu@kodinkonetukku.fi",
                      }}
                    >
                      {"asiakaspalvelu@helkamakodinkoneet.fi"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "dropdown")}
              data-w-id="379e97c9-568b-f972-ebc0-ef36905bdc0b"
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "dropdown-toggle")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-8")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "dropdown-icon-closed")}
                    tag="h4"
                  >
                    <_Builtin.Strong className={_utils.cx(_styles, "")}>
                      {""}
                    </_Builtin.Strong>
                  </_Builtin.Heading>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-15")}
                    tag="h5"
                  >
                    {"Keskushuolto ja neuvonta"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "dropdown-chevron")}
                  tag="h4"
                >
                  <_Builtin.Strong
                    className={_utils.cx(_styles, "bold-text-2")}
                  >
                    {""}
                  </_Builtin.Strong>
                </_Builtin.Heading>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "dropdown-list")}
                tag="nav"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-9")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    {"Ma–Pe 9.00–11.30 ja 12.30–15.00"}
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    {"Puh"}
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-3")}
                      button={false}
                      block=""
                      options={{
                        href: "#",
                      }}
                    >
                      {"044 337 9610"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    <_Builtin.Link
                      className={_utils.cx(_styles, "link-3")}
                      button={false}
                      block=""
                      options={{
                        href: "mailto:asiakaspalvelu@kodinkonetukku.fi",
                      }}
                    >
                      {"huolto@helkamakodinkoneet.fi"}
                    </_Builtin.Link>
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "dropdown")}
              data-w-id="379e97c9-568b-f972-ebc0-ef36905bdc21"
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "dropdown-toggle")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-8")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "dropdown-icon-closed")}
                    tag="h4"
                  >
                    <_Builtin.Strong>{""}</_Builtin.Strong>
                  </_Builtin.Heading>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-15")}
                    tag="h5"
                  >
                    {"Helsingin toimipiste &showroom"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "dropdown-chevron")}
                  tag="h4"
                >
                  <_Builtin.Strong
                    className={_utils.cx(_styles, "bold-text-2")}
                  >
                    {""}
                  </_Builtin.Strong>
                </_Builtin.Heading>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "dropdown-list")}
                tag="nav"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-9")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    {
                      "Toimitilojemme yhteydessä Helsingin Lauttasaaressa sijaitsee näyttelytila, jossa on esillä joitakin kodinkonemallejamme. Näyttelytila sijaitsee kolmannessa kerroksessa ja on avoinna jälleenmyyjille sekä yhteistyökumppaneille sopimuksesta."
                    }
                  </_Builtin.Block>
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    {"Veneentekijäntie 12"}
                    <br />
                    {"00210 Helsinki"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
            <_Builtin.DropdownWrapper
              className={_utils.cx(_styles, "dropdown")}
              data-w-id="379e97c9-568b-f972-ebc0-ef36905bdc34"
              tag="div"
              delay={0}
              hover={false}
            >
              <_Builtin.DropdownToggle
                className={_utils.cx(_styles, "dropdown-toggle")}
                tag="div"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-8")}
                  tag="div"
                >
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "dropdown-icon-closed")}
                    tag="h4"
                  >
                    <_Builtin.Strong>{""}</_Builtin.Strong>
                  </_Builtin.Heading>
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "heading-15")}
                    tag="h5"
                  >
                    {"Tampereen toimipiste"}
                  </_Builtin.Heading>
                </_Builtin.Block>
                <_Builtin.Heading
                  className={_utils.cx(_styles, "dropdown-chevron")}
                  tag="h4"
                >
                  <_Builtin.Strong
                    className={_utils.cx(_styles, "bold-text-2")}
                  >
                    {""}
                  </_Builtin.Strong>
                </_Builtin.Heading>
              </_Builtin.DropdownToggle>
              <_Builtin.DropdownList
                className={_utils.cx(_styles, "dropdown-list")}
                tag="nav"
              >
                <_Builtin.Block
                  className={_utils.cx(_styles, "div-block-9")}
                  tag="div"
                >
                  <_Builtin.Block
                    className={_utils.cx(_styles, "text-block-6")}
                    tag="div"
                  >
                    {"Sellukatu 5 A 1"}
                    <br />
                    {"33400 Tampere"}
                  </_Builtin.Block>
                </_Builtin.Block>
              </_Builtin.DropdownList>
            </_Builtin.DropdownWrapper>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "container-3")} tag="div">
        <_Builtin.Block
          className={_utils.cx(_styles, "footer-bottom")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-copyright")}
            tag="div"
            id="copyright"
          >
            {"© 2025 Helkama Kodinkoneet Oy"}
            <br />
            {"Y-tunnus 0935126-1"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "footer-block-two")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "footer-link-two")}
              button={false}
              block=""
              options={{
                href: "#",
                target: "_blank",
              }}
            >
              {"Helkama Kodinkoneet"}
            </_Builtin.Link>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "div-block-34")}
            tag="div"
          >
            <_Builtin.Link
              className={_utils.cx(_styles, "link-block-11")}
              button={false}
              block="inline"
              options={{
                href: "https://www.instagram.com/rosenlewkodinkoneet/",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-36-copy")}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6728c00a3dc736ab0bc51fde/6731fae3fd718c21c0588cd1_instagram_icon.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "link-block-11")}
              button={false}
              block="inline"
              options={{
                href: "https://www.facebook.com/helkamakodinkoneet/",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-36")}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6728c00a3dc736ab0bc51fde/6731fae3fd718c21c0588cac_facebook_icon.svg"
              />
            </_Builtin.Link>
            <_Builtin.Link
              className={_utils.cx(_styles, "link-block-11")}
              button={false}
              block="inline"
              options={{
                href: "https://linkedin.com/company/kodinkonetukku/",
                target: "_blank",
              }}
            >
              <_Builtin.Image
                className={_utils.cx(_styles, "image-36-copy")}
                width="auto"
                height="auto"
                loading="lazy"
                alt=""
                src="https://cdn.prod.website-files.com/6728c00a3dc736ab0bc51fde/6731fae3fd718c21c0588cc9_linkedin_icon.svg"
              />
            </_Builtin.Link>
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
    </_Component>
  );
}
