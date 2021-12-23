//import { fragmentToJSON, defaultSchema as schema } from "@atlaskit/adf-schema";
//import DOMParser from "react-native-html-parser";
//import { DOMSerializer } from "prosemirror-model";
//import { JSDOM } from "jsdom";
import React, { useEffect, useState } from "react";

const initialDocument = {
  version: 1,
  type: "doc",
  content: [
    {
      type: "heading",
      attrs: {
        level: 2,
      },
      content: [
        {
          type: "text",
          text: "What is Health?",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The World Health Organisation (WHO) describes health as a state of complete physical, mental, and social well-being, and not merely the absence of disease or infirmity. If a person has no illness and is in a good physical state but dealing with psychological disorders or is going through physical, emotional, or psychological strain then that person is not considered a healthy person.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Now, this is a highly simplified definition and doesn't represent the concept of health entirely.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Health can be considered as the ability to adapt to physical, environmental, and social challenges. After all, isn't it the adaptations that have helped humans evolve?",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Even though we have progressed technologically to a great extent but 'health' has been compromised in the process.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "While our ancestors may not have had the sharpest brain, they did have a much more active lifestyle, they used to move hundreds of kilometers to find food, water, and shelter.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Evolution changed everything, technological advances have put us in a state of no to very few activities to perform the same task. The modern man is smart, technologically adept, and knows much more than his forefathers, but is sadly confined to a screen. Health is compromised as a result of leading a stagnant lifestyle where one eats a lot and sits a lot more. All these changes have happened in a short period (i.e. decades, rather than centuries) and the human bodies have not had the time to adapt yet.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Evolutionary adaptations happen after thousands of years, but these technological advances came after the mid-1900s, so we didn't get too much time to adapt, thus our body's functions are still the same as our ancestors, but we have less physical work now.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Generally speaking, a healthy person has well-functioning internal systems. The indications of the same are shared in figure 2. Review the list and identify if one can be called 'healthy'.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "It is important to note that just 'looking' healthy need not make a person healthy. Health must always be looked at holistically.",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "Now, an important question arises - Are health and fitness the same thing?",
        },
      ],
    },
    {
      type: "paragraph",
      content: [
        {
          type: "text",
          text: "The answer is NO.",
        },
      ],
    },
  ],
};

// default schema from Atlassian adf-schema is same as prosemirror-model schema
//create an DOM serializer from adf-schema
//const mainSerializer = DOMSerializer.fromSchema(schema);

const getDOMDocument = () => {
  const dom = new JSDOM('<!DOCTYPE html><div id="content"></div>');
  const document = dom.window.document;
  const renderer = document.querySelector("div");

  return { document, renderer };
};

export const AdfTohtml = (nodeObject) => {
  // // create a dom object for conversion of schema to html
  // const { document, renderer } = getDOMDocument(); //
  // // create adf-schema nodes from stored json object.
  // const node = schema.nodeFromJSON(nodeObject);
  // // serialize to html using renderer
  // mainSerializer.serializeFragment(node, { document }, renderer);
  // return document.getElementById("content").innerHTML;
};

console.log(AdfTohtml(initialDocument));
