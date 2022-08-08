import React, { useReducer } from "react";

const initialState: surveyResults = {
  pulseID: "2342343234",
  email: "",
  dateModified: new Date(),
  responses: {},
};

interface surveyResults {
  pulseID: string;
  email: string;
  dateModified: Date;
  responses: any;
}

type SurveyActions = {
  type: "SET_RESPONSE";
  fieldName: string;
  payload: string | number;
};

function surveyReducer(state: surveyResults, action: SurveyActions) {
  switch (action.type) {
    case "SET_RESPONSE": {
      return {
        ...state,
        dateModified: new Date(),
        responses: {
          ...state.responses,
          [action.fieldName]: action.payload,
        },
      };
    }

    default:
      throw new Error("No Action");
  }
}

export default function LoginUseReducer() {
  const [state, dispatch] = useReducer(surveyReducer, initialState);
  // const { username, password, isLoading, error, isLoggedIn } = state;

  const softwareList = [
    {
      name: "PhotoShop",
      fieldName: "adobe_photoshop",
    },
    {
      name: "Microsoft Word",
      fieldName: "microsoft_word",
    },
  ];

  const saveResponse = (fieldName: string, payload: any) => {
    dispatch({
      type: "SET_RESPONSE",
      fieldName,
      payload,
    });
  };

  return (
    <div className="App">
      <pre style={{ whiteSpace: "pre-wrap" }}>{JSON.stringify(state)}</pre>
      <hr />
      {state.responses?.adobe_photoshop}
      <hr />
      <input
        type="text"
        placeholder="username"
        // value={username}
        onChange={(e) =>
          dispatch({
            type: "SET_RESPONSE",
            fieldName: "username",
            payload: e.currentTarget.value,
          })
        }
      />

      <input
        type="password"
        placeholder="password"
        autoComplete="new-password"
        // value={password}
        onChange={(e) =>
          dispatch({
            type: "SET_RESPONSE",
            fieldName: "password",
            payload: e.currentTarget.value,
          })
        }
      />
      {softwareList.map((software, i) => (
        <fieldset key={i}>
          <h2>{software.name}</h2>
          <input
            type="radio"
            checked={state.responses[software.fieldName] === 5}
            onChange={() => saveResponse(software.fieldName, 5)}
          />
          5
          <input
            type="radio"
            checked={state.responses[software.fieldName] === 4}
            onChange={() => saveResponse(software.fieldName, 4)}
          />
          4
          <input
            type="radio"
            checked={state.responses[software.fieldName] === 3}
            onChange={() => saveResponse(software.fieldName, 3)}
          />
          3
          <input
            type="radio"
            value="2"
            checked={state.responses[software.fieldName] === 2}
            onChange={() => saveResponse(software.fieldName, 2)}
          />
          2
          <input
            type="radio"
            checked={state.responses[software.fieldName] === 1}
            onChange={() => saveResponse(software.fieldName, 1)}
          />
          1
          <input
            type="radio"
            checked={state.responses[software.fieldName] === 0}
            onChange={() => saveResponse(software.fieldName, 0)}
          />
          0
        </fieldset>
      ))}
    </div>
  );
}
