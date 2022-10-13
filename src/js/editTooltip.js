export const contactTooltip = (type, value) => {
  const tooltip = document.createElement("div"),
    tooltipType = document.createElement("span"),
    tooltipValue = document.createElement("a");

  tooltip.classList.add("contact-tooltip", "site-tooltip");
  tooltipType.classList.add("contact-tooltip_type");
  tooltipValue.classList.add("contact-tooltip_value");

  tooltipType.textContent = type + ": ";
  tooltipValue.textContent = value;

  tooltip.append(tooltipType, tooltipValue);

  return {
    tooltip,
    tooltipType,
    tooltipValue,
  };
};
