import {useState} from "react";

function TextExpander({collapsedNumWords,
                          expandButtonText = "Show more",
                          collapseButtonText = "Show less",
                          buttonColor,
                          expanded,
                          className,
                          children,
                      }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const displayText = isExpanded ? children : "temp";

    return (
        <div className={className}>
            <span>{displayText}</span>
            <button onClick={()=>setIsExpanded(!isExpanded)}>
                {expanded ? collapseButtonText : expandButtonText}
            </button>
        </div>
    )
}

export default TextExpander;