import * as globals from "../../../../app/globals";
import {
  apiArgType,
  classNameArgType,
  defaultValueArgType,
  iriArgType,
  ontologyIdArgType,
  parameterArgType,
  thingTypeArgType,
  titleTextArgType,
  useLegacyArgType,
} from "../../../../stories/storyArgs";
import "../../../../style/customTitleStyle.css";

export const TitleWidgetStoryArgTypes = {
  ...apiArgType,
  ...ontologyIdArgType,
  ...thingTypeArgType,
  ...iriArgType,
  ...parameterArgType,
  ...titleTextArgType,
  ...defaultValueArgType,
  ...useLegacyArgType,
  ...classNameArgType,
};

export const TitleWidgetStoryArgs = {
  api: "",
  useLegacy: true,
  iri: "",
  ontologyId: "",
  thingType: "",
  titleText: "",
  defaultValue: "",
  className: "",
  parameter: "collection=nfdi4health",
};

export const TitleWidgetDefault = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
  },
};

export const SelectingDefiningOntology = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://purl.obolibrary.org/obo/IAO_0000631",
    thingType: "term",
    parameter: "",
  },
};

export const TitleWidgetWithTitleText = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    titleText: "title text",
  },
};

export const IncorrectIriWithDefaultValue = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    defaultValue: "default value",
  },
};

export const IncorrectIriWithoutDefaultValue = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C29",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
  },
};

export const DefiningOntologyUnavailable = {
  args: {
    api: globals.EBI_API_ENDPOINT,
    iri: "http://identifiers.org/uniprot/Q9VAM9",
    thingType: "term",
    parameter: "",
  },
};

export const WithStyles = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    className: "custom-title-style",
  },
};

export const WithoutStyles = {
  args: {
    iri: "http://purl.obolibrary.org/obo/NCIT_C2985",
    api: globals.ZBMED_OLS4_API,
    ontologyId: "ncit",
    thingType: "term",
    className: "none",
  },
};
