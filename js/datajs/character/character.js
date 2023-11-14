const characterAttributes = {
    '模版':{
        roleProperties: '虚',       /* 角色属性 */
        roleOccupation: '战士',     /* 角色职业 */
        weaponType: '单手剑',       /* 主武器类型 */
        weapon2Type: '无',          /* 副武器类型 */
        crit: 1,                    /* 满破自带暴击 */
        addAtk: 1,                  /* 满破攻击觉醒 */
        addDef: 1,                  /* 满破防御觉醒 */
        addHP: 1,                   /* 满破生命觉醒 */
        addHeal: 1,                 /* 满破回血觉醒 */
        reduceDamage: 1,            /* 伤害减免 */
        basicAtk: 1,                /* 1级攻击白值 */
        basicDef: 1,                /* 1级防御白值 */
        basicHP: 1,                 /* 1级生命白值 */
        basicHeal: 1,               /* 五星回血值白值 */
        skill: 1,                   /* 满破总技伤 */
        cdSkill: 1                  /* 角色自带cd */
    },
    '普利特维采∧双手剑':{
        roleProperties: '火',       
        roleOccupation: '战士',     
        weaponType: '双手剑',      
        weapon2Type: '无',
        crit: 3,                    
        addAtk: 67,                  
        addDef: 39,                  
        addHP: 39,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 116,                
        basicDef: 32,                
        basicHP: 1071,                 
        basicHeal: 0,                
        skill: 15,                  
        cdSkill: 0                  
    },
    '普利特维采∧单手剑':{
        roleProperties: '火',       
        roleOccupation: '战士',     
        weaponType: '单手剑',      
        weapon2Type: '无',
        crit: 3,                    
        addAtk: 67,                  
        addDef: 39,                  
        addHP: 39,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 116,                
        basicDef: 32,                
        basicHP: 1071,                 
        basicHeal: 0,                
        skill: 15,                  
        cdSkill: 0                  
    },
    '玛丽娜':{
        roleProperties: '水',       
        roleOccupation: '坦克',     
        weaponType: '单手剑',      
        weapon2Type: '无',
        crit: 0,                    
        addAtk: 45,                  
        addDef: 41,                  
        addHP: 57,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 124,                
        basicDef: 76,                
        basicHP: 1080,                 
        basicHeal: 0,                
        skill: 4,                  
        cdSkill: 8                  
    },
    '拉碧丝∧单手剑':{
        roleProperties: '光',       
        roleOccupation: '战士',     
        weaponType: '单手剑',      
        weapon2Type: '盾牌',
        crit: 8,                    
        addAtk: 58,                  
        addDef: 41,                  
        addHP: 42,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 116,                
        basicDef: 24,                
        basicHP: 1081,                 
        basicHeal: 0,                
        skill: 0,                  
        cdSkill: 6                  
    },
    '拉碧丝∧双手剑':{
        roleProperties: '光',       
        roleOccupation: '战士',     
        weaponType: '双手剑',      
        weapon2Type: '无',
        crit: 8,                    
        addAtk: 58,                  
        addDef: 41,                  
        addHP: 42,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 116,                
        basicDef: 24,                
        basicHP: 1081,                 
        basicHeal: 0,                
        skill: 0,                  
        cdSkill: 6                  
    },
    '克罗姆小姐':{
        roleProperties: '虚',       
        roleOccupation: '射手',     
        weaponType: '步枪',      
        weapon2Type: '步枪',
        crit: 0,                    
        addAtk: 68,                  
        addDef: 39,                  
        addHP: 43,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 100,                
        basicDef: 40,                
        basicHP: 750,                 
        basicHeal: 0,                
        skill: 10,                  
        cdSkill: 6                  
    },
    '佳岚∧弓':{
        roleProperties: '水',       
        roleOccupation: '射手',     
        weaponType: '弓',      
        weapon2Type: '无',
        crit: 0,                    
        addAtk: 63,                  
        addDef: 41,                  
        addHP: 42,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 153,                
        basicDef: 16,                
        basicHP: 961,                 
        basicHeal: 1512,                
        skill: 6,                  
        cdSkill: 8                  
    },
    '佳岚∧篮子':{
        roleProperties: '水',       
        roleOccupation: '射手',     
        weaponType: '篮子',      
        weapon2Type: '无',
        crit: 0,                    
        addAtk: 63,                  
        addDef: 41,                  
        addHP: 42,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 153,                
        basicDef: 16,                
        basicHP: 961,                 
        basicHeal: 1512,                
        skill: 6,                  
        cdSkill: 8                  
    },
    '未来骑士∧单手剑':{
        roleProperties: '虚',       
        roleOccupation: '战士',     
        weaponType: '单手剑',      
        weapon2Type: '盾牌',
        crit: 5,                    
        addAtk: 61,                  
        addDef: 41,                  
        addHP: 36,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 128,                
        basicDef: 24,                
        basicHP: 1080,                 
        basicHeal: 0,                
        skill: 10,                  
        cdSkill: 0                  
    },
    '未来骑士∧双手剑':{
        roleProperties: '虚',       
        roleOccupation: '战士',     
        weaponType: '双手剑',      
        weapon2Type: '无',
        crit: 5,                    
        addAtk: 61,                  
        addDef: 41,                  
        addHP: 36,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 128,                
        basicDef: 24,                
        basicHP: 1080,                 
        basicHeal: 0,                
        skill: 10,                  
        cdSkill: 0                  
    },
    '未来骑士∧步枪':{
        roleProperties: '虚',       
        roleOccupation: '战士',     
        weaponType: '步枪',      
        weapon2Type: '无',
        crit: 5,                    
        addAtk: 61,                  
        addDef: 41,                  
        addHP: 36,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 128,                
        basicDef: 24,                
        basicHP: 1080,                 
        basicHeal: 0,                
        skill: 10,                  
        cdSkill: 0                  
    },
    '未来骑士∧弓':{
        roleProperties: '虚',       
        roleOccupation: '战士',     
        weaponType: '弓',      
        weapon2Type: '无',
        crit: 5,                    
        addAtk: 61,                  
        addDef: 41,                  
        addHP: 36,                   
        addHeal: 0,                 
        reduceDamage: 0,            
        basicAtk: 128,                
        basicDef: 24,                
        basicHP: 1080,                 
        basicHeal: 0,                
        skill: 10,                  
        cdSkill: 0                  
    },
}