'use client';

import React from 'react';
import CategoryColumnsGridBase from './CategoryColumnsGridBase';
import { useCategoryGroup } from '@/lib/hooks/useCategoryColumns';

interface CategoryColumnsGridThirdGroupProps {
  showTitle?: boolean;
  maxArticlesPerColumn?: number;
}

export default function CategoryColumnsGridThirdGroup({
  showTitle = false,
  maxArticlesPerColumn = 3,
}: CategoryColumnsGridThirdGroupProps) {
  const { groupData, loading, error } = useCategoryGroup('third-group');

  return (
    <CategoryColumnsGridBase
      groupId="third-group"
      title={showTitle ? groupData?.title : undefined}
      categories={groupData?.categories || []}
      loading={loading}
      error={error}
      maxArticlesPerColumn={maxArticlesPerColumn}
    />
  );
}
