import { state } from "../../state.js";

import { renderWrksAIOverview } from "./renderWrksAIOverview.js";
import { renderWrksAIGeneric } from "./renderWrksAIGeneric.js";
import { renderModelSelection } from "./renderModelSelection.js";
import { renderModelSwitching } from "./renderModelSwitching.js";
import { renderTokenOptimization } from "./renderTokenOptimization.js";
import { renderWorkflowChains } from "./renderWorkflowChains.js";
import { renderRecommendedAgents } from "./renderRecommendedAgents.js";

export function renderWrksAI() {
  switch (state.currentSubTab) {
    case "overview":
      return renderWrksAIOverview();

    case "model-selection":
      return renderModelSelection();

    case "model-switching":
      return renderModelSwitching();

    case "token-optimization":
      return renderTokenOptimization();

    case "workflow-chains":
      return renderWorkflowChains();

    case "recommended-agents":
      return renderRecommendedAgents();

    default:
      return renderWrksAIGeneric();
  }
}






