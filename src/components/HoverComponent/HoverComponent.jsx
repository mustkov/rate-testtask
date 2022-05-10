import React from "react";

export default function HoverComponent({ data }) {
  return (
    <div className="hover">
      <blockquote className="quote">{data.Name}</blockquote>
    </div>
  );
}
