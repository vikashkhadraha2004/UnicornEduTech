'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { Button } from "@/components/ui/button"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Unicorn Edutech
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg text-lg">
            Launch your tech career with industry-leading courses, live sessions, and placement support. Join 10,000+ successful alumni.
          </p>
          <div className="flex gap-4 mt-8">
            <Button size="lg">Explore Courses</Button>
            <Button size="lg" variant="outline">Join Live Session</Button>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative hidden md:block">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}