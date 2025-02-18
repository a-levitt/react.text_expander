import {useState} from "react";

function TextExpander({collapsedNumWords,
                          expandButtonText = "Show more",
                          collapseButtonText = "Show less",
                          buttonColor,
                          expanded = false,
                          className,
                          children,
                      }) {
    const [isExpanded, setIsExpanded] = useState(expanded);

    const displayText = isExpanded ? children : "temp";

    return (
        <div className={className}>
            <span>{displayText}</span>
            <button onClick={()=>setIsExpanded(!isExpanded)}>
                {isExpanded ? collapseButtonText : expandButtonText}
            </button>
        </div>
    )
}

export default TextExpander;