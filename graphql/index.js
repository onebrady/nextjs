import request, { gql } from "graphql-request";

const MASTER_URL =
  "https://api-us-west-2.hygraph.com/v2/clovwhwrz4eud01uqfl739ivx/master";

export const getVans = async () => {
  const query = gql`
    query Vans {
      vanTypes {
        id
        name
        image {
          width
          url
          height
        }
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getSteps = async (props) => {
  const stepQuery = gql`
  query Steps {
    stepCategories(where: {vanTypes_some: {id: "${props}"}}, orderBy: displayOrder_ASC) {
      id
      name
    }
  }
  `;
  const stepResult = await request(MASTER_URL, stepQuery);
  return stepResult;
};

export const getOptions = async (props) => {
  const optionQuery = gql`
    query optionQuery {
      options(first:100,where: { stepCategory: { id: "${props}" } }) {
        name
    id
    toolTip
   
    stepCategory {
      name
    }
    optionGroups {
      name
      id
    }
    image {
      url
      width
      height
    }
      }
    }
  `;
  const stepResult = await request(MASTER_URL, optionQuery);
  return stepResult;
};

export const getDefaultOptions = async (props) => {
  const defaultOptionQuery = gql`
    query Steps {
      options(where: { defaultItem: true }) {
        id
        name
        image {
          url
        }
        optionGroups {
          id
          name
        }
      }
    }
  `;
  const getDefaultOptionsResult = await request(MASTER_URL, defaultOptionQuery);
  return getDefaultOptionsResult;
};
