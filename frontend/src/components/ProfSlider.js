import * as React from 'react';
import Slider from '@mui/material/Slider'



export default function ProfSlider({ spec, knowledge, updateData }) {
    
    const handleSliderChange = (event, newValue) => {
        updateData(spec.name, newValue);
    }

    const markArray = (max) => {
        var arr = [];
        for(var i = 0; i <= max; i += 5) {
            arr.push({value: i});
        }
        return arr;
    }

    return (
      <span>
        <span
          className="spec-title mr-2"
          title={ spec.name }
        >
          { spec.name }
        </span>
        <span className="spec-points mr-2">
          { knowledge } / { spec.maxKnowledge }
        </span>
        <span>
        <Slider
          aria-label= { spec.name.replace(/\s+/g, '') + "Slider" }
          defaultValue={ knowledge }
          valueLabelDisplay="auto"
          onChangeCommitted={ handleSliderChange }
          step={1}
          marks = { markArray(spec.maxKnowledge) }
          min={0}
          max={ spec.maxKnowledge }
        />
        </span>
      </span>
    );
  }