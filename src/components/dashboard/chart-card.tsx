"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { LucideIcon, TrendingDown, TrendingUp } from 'lucide-react'
import { CartesianGrid, Line, LineChart, XAxis } from "recharts"

interface ChartDataPoint {
  month: string;
  [key: string]: number | string;
}

interface OverviewChartProps {
  icon: LucideIcon;
  label: string;
  description: string;
  adjustment: {
    value: number;
    trend: 'up' | 'down';
  }
  chartData: ChartDataPoint[];
  chartConfig: {
    [key: string]: {
      label: string;
      color: string;
    }
  }
}

export function OverviewChart({
  icon: Icon,
  label,
  description,
  adjustment,
  chartData,
  chartConfig,
}: OverviewChartProps) {
  const dataKey = label.toLowerCase()
  
  return (
    <Card>
      <CardHeader className="p-3">
        <div className="flex items-center justify-between">
          <CardTitle className="caption font-medium flex items-center gap-2">
            <Icon className="h-4 w-4" />
            {label}
          </CardTitle>
          <Badge 
            variant="secondary" 
            className={`p-1 text-xs ${
              adjustment.trend === 'up' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {adjustment.trend === 'up' ? (
              <TrendingUp className="h-4 w-4 mr-1"/>
            ) : (
              <TrendingDown className="h-4 w-4 mr-1"/>
            )}
            {adjustment.value}%
          </Badge>
        </div>
        <CardDescription className="text-xs text-muted-foreground">
          Total: {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="py-0 px-2 max-h-32">
        <ChartContainer config={chartConfig} className="max-h-20 w-full mx-auto">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={0}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel/>}
            />
            <Line
              dataKey={dataKey}
              type="monotone"
              stroke={chartConfig[dataKey].color}
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}

