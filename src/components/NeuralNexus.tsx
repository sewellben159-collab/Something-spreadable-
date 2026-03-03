import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import { NEURAL_LAYERS } from '../types';

export const NeuralNexus: React.FC = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const width = 600;
    const height = 400;
    const margin = { top: 40, right: 40, bottom: 40, left: 40 };

    const g = svg.append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    const nodeWidth = 120;
    const nodeHeight = 60;
    const spacing = 100;

    // Draw layers
    NEURAL_LAYERS.forEach((layer, i) => {
      const x = i * spacing;
      const y = height / 2 - nodeHeight / 2 - margin.top;

      // Connections
      if (i < NEURAL_LAYERS.length - 1) {
        g.append('line')
          .attr('x1', x + nodeWidth)
          .attr('y1', y + nodeHeight / 2)
          .attr('x2', (i + 1) * spacing)
          .attr('y2', y + nodeHeight / 2)
          .attr('stroke', '#141414')
          .attr('stroke-width', 1)
          .attr('stroke-dasharray', '4,4');
      }

      // Layer box
      const group = g.append('g')
        .attr('transform', `translate(${x},${y})`);

      group.append('rect')
        .attr('width', nodeWidth)
        .attr('height', nodeHeight)
        .attr('fill', 'transparent')
        .attr('stroke', '#141414')
        .attr('stroke-width', 1);

      group.append('text')
        .attr('x', 10)
        .attr('y', 20)
        .attr('font-size', '10px')
        .attr('font-family', 'monospace')
        .attr('font-weight', 'bold')
        .text(layer.name);

      group.append('text')
        .attr('x', 10)
        .attr('y', 40)
        .attr('font-size', '8px')
        .attr('font-family', 'monospace')
        .attr('opacity', 0.6)
        .text(layer.details);
        
      // Pulse animation
      group.append('circle')
        .attr('cx', nodeWidth / 2)
        .attr('cy', nodeHeight / 2)
        .attr('r', 2)
        .attr('fill', '#141414')
        .append('animate')
        .attr('attributeName', 'r')
        .attr('values', '2;10;2')
        .attr('dur', '2s')
        .attr('repeatCount', 'indefinite');
    });

  }, []);

  return (
    <div className="border border-black p-4 bg-[#E4E3E0]">
      <h3 className="font-serif italic text-xs uppercase tracking-widest opacity-50 mb-4">Neural Nexus Core (LuciferRex v1.0)</h3>
      <div className="overflow-x-auto">
        <svg ref={svgRef} width="600" height="300" className="mx-auto" />
      </div>
    </div>
  );
};
