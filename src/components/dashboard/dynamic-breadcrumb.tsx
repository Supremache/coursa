"use client";

import { 
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
    BreadcrumbPage
  } from "@/components/ui/breadcrumb";
  import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
  import React from 'react';
  
  const DynamicBreadcrumb = () => {
    const segments = useSelectedLayoutSegments();
    const pathname = usePathname();
  
    return (
      <Breadcrumb className="flex-grow">
        <BreadcrumbList>
          {/* Static first breadcrumb */}
          <BreadcrumbItem>
            {pathname === '/admin/dashboard' ? (
              <BreadcrumbPage>Overview</BreadcrumbPage>
            ) : (
              <BreadcrumbLink href="/admin/dashboard">Overview</BreadcrumbLink>
            )}
          </BreadcrumbItem>
          {segments.length > 0 && <BreadcrumbSeparator />}
          
          {segments.map((param, index) => {
            const isLast = index === segments.length - 1;
            const href = `/admin/dashboard/${segments.slice(0, index + 1).join('/')}`;
            
            return (
              <React.Fragment key={param}>
                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage>
                      {param.charAt(0).toUpperCase() + param.slice(1)}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink href={href}>
                      {param.charAt(0).toUpperCase() + param.slice(1)}
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
                {index < segments.length - 1 && <BreadcrumbSeparator />}
              </React.Fragment>
            );
          })}
        </BreadcrumbList>
      </Breadcrumb>
    );
  };
  
  export default DynamicBreadcrumb;