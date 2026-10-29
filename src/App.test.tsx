import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import App from "./App";

describe("portfolio page", () => {
  beforeEach(() => {
    vi.stubGlobal("window", {
      matchMedia: () => ({ matches: true }),
    });
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });
  
  it("renders the Getuar Gashi identity and all primary sections", () => {
    const markup = renderToStaticMarkup(createElement(App));

    expect(markup).toContain("GETUAR");
    expect(markup).toContain("GASHI");
    expect(markup).toContain("COMPUTER SCIENCE");
    expect(markup).toContain('id="profile"');
    expect(markup).toContain('id="projects"');
    expect(markup).toContain('id="contact"');
    expect(markup).toContain("Getuar Gashi profile portrait");
    expect(markup).toContain("https://github.com/Getuar333/gg-strategy");
  });

  it("renders the real project archive with working repository links", () => {
    const markup = renderToStaticMarkup(createElement(App));

    expect(markup).toContain("G.G STRATEGY");
    expect(markup).toContain("UBT-FINDPOINT");
    expect(markup).toContain("FREELANCER-MARKETPLACE");
    expect(markup).toContain("JOURNEYSYNC");
    expect(markup).toContain("SMART HOSPITAL SYSTEM");
    expect(markup).toContain("RESTAURANT SYSTEM");
    expect(markup).toContain("UNITED STADIUM SEAT SELECTION");
    expect(markup).toContain("COURSE CLICKER");
    expect(markup).toContain("https://github.com/Getuar333/gg-strategy");
    expect(markup).toContain("https://github.com/ertihoxha5/JourneySync");
    expect(markup).toContain("does not send messages");
    expect(markup).not.toContain("NEW_MESSAGE.SYS");
    expect(markup).not.toContain("<form");
  });
});
