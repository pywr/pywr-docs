Search.setIndex({docnames:["api/generated/pywr.parameters.AggregatedIndexParameter","api/generated/pywr.parameters.AggregatedParameter","api/generated/pywr.parameters.AnnualHarmonicSeriesParameter","api/generated/pywr.parameters.ArrayIndexedParameter","api/generated/pywr.parameters.ArrayIndexedScenarioMonthlyFactorsParameter","api/generated/pywr.parameters.ArrayIndexedScenarioParameter","api/generated/pywr.parameters.ConstantParameter","api/generated/pywr.parameters.ConstantScenarioParameter","api/generated/pywr.parameters.DailyProfileParameter","api/generated/pywr.parameters.DataFrameParameter","api/generated/pywr.parameters.DeficitParameter","api/generated/pywr.parameters.HydropowerTargetParameter","api/generated/pywr.parameters.IndexParameter","api/generated/pywr.parameters.IndexedArrayParameter","api/generated/pywr.parameters.MaxParameter","api/generated/pywr.parameters.MinParameter","api/generated/pywr.parameters.MonthlyProfileParameter","api/generated/pywr.parameters.NegativeMaxParameter","api/generated/pywr.parameters.NegativeMinParameter","api/generated/pywr.parameters.NegativeParameter","api/generated/pywr.parameters.Parameter","api/generated/pywr.parameters.ScenarioMonthlyProfileParameter","api/generated/pywr.parameters.TablesArrayParameter","api/generated/pywr.parameters.WeeklyProfileParameter","api/generated/pywr.parameters.control_curves.BaseControlCurveParameter","api/generated/pywr.parameters.control_curves.ControlCurveIndexParameter","api/generated/pywr.parameters.control_curves.ControlCurveInterpolatedParameter","api/generated/pywr.recorders.AnnualCountIndexParameterRecorder","api/generated/pywr.recorders.CSVRecorder","api/generated/pywr.recorders.DeficitFrequencyNodeRecorder","api/generated/pywr.recorders.FlowDurationCurveDeviationRecorder","api/generated/pywr.recorders.FlowDurationCurveRecorder","api/generated/pywr.recorders.HydropowerRecorder","api/generated/pywr.recorders.IndexParameterRecorder","api/generated/pywr.recorders.MeanFlowNodeRecorder","api/generated/pywr.recorders.MinimumThresholdVolumeStorageRecorder","api/generated/pywr.recorders.MinimumVolumeStorageRecorder","api/generated/pywr.recorders.NodeRecorder","api/generated/pywr.recorders.NumpyArrayIndexParameterRecorder","api/generated/pywr.recorders.NumpyArrayLevelRecorder","api/generated/pywr.recorders.NumpyArrayNodeRecorder","api/generated/pywr.recorders.NumpyArrayParameterRecorder","api/generated/pywr.recorders.NumpyArrayStorageRecorder","api/generated/pywr.recorders.ParameterRecorder","api/generated/pywr.recorders.Recorder","api/generated/pywr.recorders.RollingMeanFlowNodeRecorder","api/generated/pywr.recorders.RollingWindowParameterRecorder","api/generated/pywr.recorders.SeasonalFlowDurationCurveRecorder","api/generated/pywr.recorders.StorageDurationCurveRecorder","api/generated/pywr.recorders.StorageRecorder","api/generated/pywr.recorders.TablesRecorder","api/generated/pywr.recorders.TotalDeficitNodeRecorder","api/generated/pywr.recorders.TotalFlowNodeRecorder","api/generated/pywr.recorders.TotalHydroEnergyRecorder","api/pywr","api/pywr.domains","api/pywr.notebook","api/pywr.optimisation","api/pywr.parameters","api/pywr.recorders","cookbook/aggregated_parameter","cookbook/cookbook","cookbook/dataframes","cookbook/demand_saving","formulation","index","install","json","license","tutorial"],envversion:53,filenames:["api/generated/pywr.parameters.AggregatedIndexParameter.rst","api/generated/pywr.parameters.AggregatedParameter.rst","api/generated/pywr.parameters.AnnualHarmonicSeriesParameter.rst","api/generated/pywr.parameters.ArrayIndexedParameter.rst","api/generated/pywr.parameters.ArrayIndexedScenarioMonthlyFactorsParameter.rst","api/generated/pywr.parameters.ArrayIndexedScenarioParameter.rst","api/generated/pywr.parameters.ConstantParameter.rst","api/generated/pywr.parameters.ConstantScenarioParameter.rst","api/generated/pywr.parameters.DailyProfileParameter.rst","api/generated/pywr.parameters.DataFrameParameter.rst","api/generated/pywr.parameters.DeficitParameter.rst","api/generated/pywr.parameters.HydropowerTargetParameter.rst","api/generated/pywr.parameters.IndexParameter.rst","api/generated/pywr.parameters.IndexedArrayParameter.rst","api/generated/pywr.parameters.MaxParameter.rst","api/generated/pywr.parameters.MinParameter.rst","api/generated/pywr.parameters.MonthlyProfileParameter.rst","api/generated/pywr.parameters.NegativeMaxParameter.rst","api/generated/pywr.parameters.NegativeMinParameter.rst","api/generated/pywr.parameters.NegativeParameter.rst","api/generated/pywr.parameters.Parameter.rst","api/generated/pywr.parameters.ScenarioMonthlyProfileParameter.rst","api/generated/pywr.parameters.TablesArrayParameter.rst","api/generated/pywr.parameters.WeeklyProfileParameter.rst","api/generated/pywr.parameters.control_curves.BaseControlCurveParameter.rst","api/generated/pywr.parameters.control_curves.ControlCurveIndexParameter.rst","api/generated/pywr.parameters.control_curves.ControlCurveInterpolatedParameter.rst","api/generated/pywr.recorders.AnnualCountIndexParameterRecorder.rst","api/generated/pywr.recorders.CSVRecorder.rst","api/generated/pywr.recorders.DeficitFrequencyNodeRecorder.rst","api/generated/pywr.recorders.FlowDurationCurveDeviationRecorder.rst","api/generated/pywr.recorders.FlowDurationCurveRecorder.rst","api/generated/pywr.recorders.HydropowerRecorder.rst","api/generated/pywr.recorders.IndexParameterRecorder.rst","api/generated/pywr.recorders.MeanFlowNodeRecorder.rst","api/generated/pywr.recorders.MinimumThresholdVolumeStorageRecorder.rst","api/generated/pywr.recorders.MinimumVolumeStorageRecorder.rst","api/generated/pywr.recorders.NodeRecorder.rst","api/generated/pywr.recorders.NumpyArrayIndexParameterRecorder.rst","api/generated/pywr.recorders.NumpyArrayLevelRecorder.rst","api/generated/pywr.recorders.NumpyArrayNodeRecorder.rst","api/generated/pywr.recorders.NumpyArrayParameterRecorder.rst","api/generated/pywr.recorders.NumpyArrayStorageRecorder.rst","api/generated/pywr.recorders.ParameterRecorder.rst","api/generated/pywr.recorders.Recorder.rst","api/generated/pywr.recorders.RollingMeanFlowNodeRecorder.rst","api/generated/pywr.recorders.RollingWindowParameterRecorder.rst","api/generated/pywr.recorders.SeasonalFlowDurationCurveRecorder.rst","api/generated/pywr.recorders.StorageDurationCurveRecorder.rst","api/generated/pywr.recorders.StorageRecorder.rst","api/generated/pywr.recorders.TablesRecorder.rst","api/generated/pywr.recorders.TotalDeficitNodeRecorder.rst","api/generated/pywr.recorders.TotalFlowNodeRecorder.rst","api/generated/pywr.recorders.TotalHydroEnergyRecorder.rst","api/pywr.rst","api/pywr.domains.rst","api/pywr.notebook.rst","api/pywr.optimisation.rst","api/pywr.parameters.rst","api/pywr.recorders.rst","cookbook/aggregated_parameter.rst","cookbook/cookbook.rst","cookbook/dataframes.rst","cookbook/demand_saving.rst","formulation.rst","index.rst","install.rst","json.rst","license.rst","tutorial.rst"],objects:{"pywr.domains":{Domain:[55,1,1,""],river:[55,0,0,"-"]},"pywr.domains.river":{Catchment:[55,1,1,""],Discharge:[55,1,1,""],Reservoir:[55,1,1,""],River:[55,1,1,""],RiverDomainMixin:[55,1,1,""],RiverGauge:[55,1,1,""],RiverSplit:[55,1,1,""],RiverSplitWithGauge:[55,1,1,""]},"pywr.domains.river.Catchment":{get_flow:[55,2,1,""],load:[55,3,1,""]},"pywr.domains.river.RiverGauge":{load:[55,3,1,""],mrf:[55,4,1,""],mrf_cost:[55,4,1,""]},"pywr.domains.river.RiverSplitWithGauge":{load:[55,3,1,""]},"pywr.notebook":{draw_graph:[56,5,1,""],pywr_json_to_d3_json:[56,5,1,""],pywr_model_to_d3_json:[56,5,1,""]},"pywr.optimisation":{BaseOptimisationWrapper:[57,1,1,""],ModelCache:[57,1,1,""],cache_constraints:[57,5,1,""],cache_objectives:[57,5,1,""],cache_variable_parameters:[57,5,1,""],clear_global_model_cache:[57,5,1,""]},"pywr.optimisation.BaseOptimisationWrapper":{customise_model:[57,2,1,""],make_model:[57,2,1,""],model:[57,4,1,""],model_constraints:[57,4,1,""],model_objectives:[57,4,1,""],model_variable_map:[57,4,1,""],model_variables:[57,4,1,""]},"pywr.parameters":{AggregatedIndexParameter:[0,1,1,""],AggregatedParameter:[1,1,1,""],AnnualHarmonicSeriesParameter:[2,1,1,""],ArrayIndexedParameter:[3,1,1,""],ArrayIndexedScenarioMonthlyFactorsParameter:[4,1,1,""],ArrayIndexedScenarioParameter:[5,1,1,""],ConstantParameter:[6,1,1,""],ConstantScenarioParameter:[7,1,1,""],DailyProfileParameter:[8,1,1,""],DataFrameParameter:[9,1,1,""],DeficitParameter:[10,1,1,""],HydropowerTargetParameter:[11,1,1,""],IndexParameter:[12,1,1,""],IndexedArrayParameter:[13,1,1,""],MaxParameter:[14,1,1,""],MinParameter:[15,1,1,""],MonthlyProfileParameter:[16,1,1,""],NegativeMaxParameter:[17,1,1,""],NegativeMinParameter:[18,1,1,""],NegativeParameter:[19,1,1,""],Parameter:[20,1,1,""],ScenarioMonthlyProfileParameter:[21,1,1,""],TablesArrayParameter:[22,1,1,""],WeeklyProfileParameter:[23,1,1,""]},"pywr.parameters.AggregatedIndexParameter":{__init__:[0,2,1,""]},"pywr.parameters.AggregatedParameter":{__init__:[1,2,1,""]},"pywr.parameters.AnnualHarmonicSeriesParameter":{__init__:[2,2,1,""]},"pywr.parameters.ArrayIndexedParameter":{__init__:[3,2,1,""]},"pywr.parameters.ArrayIndexedScenarioMonthlyFactorsParameter":{__init__:[4,2,1,""]},"pywr.parameters.ArrayIndexedScenarioParameter":{__init__:[5,2,1,""]},"pywr.parameters.ConstantParameter":{__init__:[6,2,1,""]},"pywr.parameters.ConstantScenarioParameter":{__init__:[7,2,1,""]},"pywr.parameters.DailyProfileParameter":{__init__:[8,2,1,""]},"pywr.parameters.DataFrameParameter":{__init__:[9,2,1,""]},"pywr.parameters.DeficitParameter":{__init__:[10,2,1,""]},"pywr.parameters.HydropowerTargetParameter":{__init__:[11,2,1,""]},"pywr.parameters.IndexParameter":{__init__:[12,2,1,""]},"pywr.parameters.IndexedArrayParameter":{__init__:[13,2,1,""]},"pywr.parameters.MaxParameter":{__init__:[14,2,1,""]},"pywr.parameters.MinParameter":{__init__:[15,2,1,""]},"pywr.parameters.MonthlyProfileParameter":{__init__:[16,2,1,""]},"pywr.parameters.NegativeMaxParameter":{__init__:[17,2,1,""]},"pywr.parameters.NegativeMinParameter":{__init__:[18,2,1,""]},"pywr.parameters.NegativeParameter":{__init__:[19,2,1,""]},"pywr.parameters.Parameter":{__init__:[20,2,1,""]},"pywr.parameters.ScenarioMonthlyProfileParameter":{__init__:[21,2,1,""]},"pywr.parameters.TablesArrayParameter":{__init__:[22,2,1,""]},"pywr.parameters.WeeklyProfileParameter":{__init__:[23,2,1,""]},"pywr.parameters.control_curves":{BaseControlCurveParameter:[24,1,1,""],ControlCurveIndexParameter:[25,1,1,""],ControlCurveInterpolatedParameter:[26,1,1,""]},"pywr.parameters.control_curves.BaseControlCurveParameter":{__init__:[24,2,1,""]},"pywr.parameters.control_curves.ControlCurveIndexParameter":{__init__:[25,2,1,""]},"pywr.parameters.control_curves.ControlCurveInterpolatedParameter":{__init__:[26,2,1,""]},"pywr.recorders":{AnnualCountIndexParameterRecorder:[27,1,1,""],CSVRecorder:[28,1,1,""],DeficitFrequencyNodeRecorder:[29,1,1,""],FlowDurationCurveDeviationRecorder:[30,1,1,""],FlowDurationCurveRecorder:[31,1,1,""],HydropowerRecorder:[32,1,1,""],IndexParameterRecorder:[33,1,1,""],MeanFlowNodeRecorder:[34,1,1,""],MinimumThresholdVolumeStorageRecorder:[35,1,1,""],MinimumVolumeStorageRecorder:[36,1,1,""],NodeRecorder:[37,1,1,""],NumpyArrayIndexParameterRecorder:[38,1,1,""],NumpyArrayLevelRecorder:[39,1,1,""],NumpyArrayNodeRecorder:[40,1,1,""],NumpyArrayParameterRecorder:[41,1,1,""],NumpyArrayStorageRecorder:[42,1,1,""],ParameterRecorder:[43,1,1,""],Recorder:[44,1,1,""],RollingMeanFlowNodeRecorder:[45,1,1,""],RollingWindowParameterRecorder:[46,1,1,""],SeasonalFlowDurationCurveRecorder:[47,1,1,""],StorageDurationCurveRecorder:[48,1,1,""],StorageRecorder:[49,1,1,""],TablesRecorder:[50,1,1,""],TotalDeficitNodeRecorder:[51,1,1,""],TotalFlowNodeRecorder:[52,1,1,""],TotalHydroEnergyRecorder:[53,1,1,""]},"pywr.recorders.AnnualCountIndexParameterRecorder":{__init__:[27,2,1,""]},"pywr.recorders.CSVRecorder":{__init__:[28,2,1,""]},"pywr.recorders.DeficitFrequencyNodeRecorder":{__init__:[29,2,1,""]},"pywr.recorders.FlowDurationCurveDeviationRecorder":{__init__:[30,2,1,""]},"pywr.recorders.FlowDurationCurveRecorder":{__init__:[31,2,1,""]},"pywr.recorders.HydropowerRecorder":{__init__:[32,2,1,""]},"pywr.recorders.IndexParameterRecorder":{__init__:[33,2,1,""]},"pywr.recorders.MeanFlowNodeRecorder":{__init__:[34,2,1,""]},"pywr.recorders.MinimumThresholdVolumeStorageRecorder":{__init__:[35,2,1,""]},"pywr.recorders.MinimumVolumeStorageRecorder":{__init__:[36,2,1,""]},"pywr.recorders.NodeRecorder":{__init__:[37,2,1,""]},"pywr.recorders.NumpyArrayIndexParameterRecorder":{__init__:[38,2,1,""]},"pywr.recorders.NumpyArrayLevelRecorder":{__init__:[39,2,1,""]},"pywr.recorders.NumpyArrayNodeRecorder":{__init__:[40,2,1,""]},"pywr.recorders.NumpyArrayParameterRecorder":{__init__:[41,2,1,""]},"pywr.recorders.NumpyArrayStorageRecorder":{__init__:[42,2,1,""]},"pywr.recorders.ParameterRecorder":{__init__:[43,2,1,""]},"pywr.recorders.Recorder":{__init__:[44,2,1,""]},"pywr.recorders.RollingMeanFlowNodeRecorder":{__init__:[45,2,1,""]},"pywr.recorders.RollingWindowParameterRecorder":{__init__:[46,2,1,""]},"pywr.recorders.SeasonalFlowDurationCurveRecorder":{__init__:[47,2,1,""]},"pywr.recorders.StorageDurationCurveRecorder":{__init__:[48,2,1,""]},"pywr.recorders.StorageRecorder":{__init__:[49,2,1,""]},"pywr.recorders.TablesRecorder":{__init__:[50,2,1,""]},"pywr.recorders.TotalDeficitNodeRecorder":{__init__:[51,2,1,""]},"pywr.recorders.TotalFlowNodeRecorder":{__init__:[52,2,1,""]},"pywr.recorders.TotalHydroEnergyRecorder":{__init__:[53,2,1,""]},pywr:{domains:[55,0,0,"-"],optimisation:[57,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","classmethod","Python class method"],"4":["py","attribute","Python attribute"],"5":["py","function","Python function"]},objtypes:{"0":"py:module","1":"py:class","2":"py:method","3":"py:classmethod","4":"py:attribute","5":"py:function"},terms:{"1st":67,"25th":60,"2nd":30,"31st":67,"abstract":55,"case":[55,62,66],"char":67,"class":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,57,67],"default":[11,14,15,28,32,50,53,55,56,66,67,69],"export":66,"final":[63,69],"float":[2,11,13,14,15,19,25,26,32,53,55],"function":[0,1,2,30,31,47,48,55,56,61,62,66],"import":[62,66,67,69],"int":[28,45,56],"long":69,"public":[63,68],"return":[2,11,13,16,21,25,26,30,32,53,60,63,67],"static":[16,66],"switch":63,"true":[50,56,62,67],"while":[60,69],FOR:68,For:[60,62,67],Its:0,The:[0,1,2,3,4,5,7,8,10,11,14,15,19,22,23,24,26,28,30,31,32,45,47,48,50,53,55,56,59,60,62,63,66,67,69],There:[60,66,67],These:[8,26,66],__init__:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,67],_core:[9,55],_default_decod:67,_index:[3,4],_v_attr:50,about:[67,69],abov:[30,55,60,62,66],above_curve_cost:55,abstractstorag:48,accept:[0,1],access:[59,62,69],accur:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53],achiev:[60,62],across:[3,30,31,47,48,50],actual:[10,11,30,63],add:[66,69],added:[0,1],addit:[28,55,66,67],addition:67,advis:62,after:[10,32],against:30,agg:60,agg_func:[0,1,30,31,47,48,60,63],aggreg:[0,1,30,31,47,48,61,63,65],aggregatedindexparamet:60,aggregatedparamet:[14,15,60,63],align:9,all:[0,3,24,28,50,58,59,61,62,66,69],alloc:65,along:68,also:[50,62,66,67],altern:[10,66,67],although:[62,66],alwai:62,amount:62,amplitud:2,anaconda:65,analysi:50,ani:[0,26,61,68,69],annual:[2,8,54,63],anoth:[14,15,19,55,67],another_paramet:60,anyth:69,api:[60,65,67],appli:[62,63,67],applic:62,approach:66,appropri:[62,67],appveyor:66,apt:66,arg:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53,55,57],arguabl:60,argument:[13,28,30,31,47,48,50,62,66,67],arnott:68,around:66,arrai:[3,4,8,13,22,30,31,32,47,48,50,54,63],array_lik:2,arrayindexedscenariomonthlyfactorsparamet:[16,21],associ:67,assum:55,atkin:68,attach:[22,24,50,60],attempt:[50,64],attribut:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,56,63],august:63,author:67,automat:[9,62,66],avaialbl:66,avail:[60,62,66],axi:[30,31,47,48],back:68,balanc:64,base:[5,12,13,16,24,54,55,57,63],baselin:[4,60,63],basenod:69,baseoptimisationwrapp:57,basic:[61,67],batch:66,becaus:69,been:[66,69],befor:[59,62,66],begin:63,behav:[0,1,60],behaviour:21,behind:66,being:[26,63],belong:63,below:[26,30,50,55,60,62,63,66,67],benefit:[55,69],better:62,between:[11,26,29,30,32,51,53,63,67],big:67,binari:65,bit:66,blog:66,bool:[50,56],boston:68,both:[55,60,62,66,67],bound:11,build:[60,66],build_ext:66,built:66,c_include_path:66,cach:57,cache_constraint:57,cache_object:57,cache_variable_paramet:57,calc_valu:10,calcul:[2,10,11,13,30,31,32,34,45,47,48,52,53,63],call:[60,67],callabl:[0,1],cambridg:62,cambridge_demand:62,can:[0,1,10,24,32,34,50,52,55,56,59,60,62,63,66,67,68,69],canva:56,captur:69,carrai:[22,50],catchment:[55,62],catchment_inflow:67,catchmod_outputs_v2:67,caus:2,ccs:26,central:63,cflag:66,channel:66,check:69,child:[0,1,60],children:60,citi:62,clang:66,classmethod:55,clear:57,clear_global_model_cach:57,close:[22,50],code:[63,66,67],coerc:8,collect:[0,1,66],column:[62,67],com:66,combin:[10,54,63],comma:[62,67],command:66,common:[58,59,60,62,63,67],commonli:63,compar:[14,15,19,26,30,60],compat:[11,32,53],compil:66,complet:32,complevel:28,complex:60,complib:28,complic:[63,67],compon:[60,63],compris:2,concept:63,conda:66,conda_prefix:66,config:66,configur:66,confluenc:55,confus:66,connect:[55,67,69],consist:8,constant:[3,7,14,15,17,18,60,63,67],constantparamet:[13,26,60],constraint:[67,69],constructor:50,contain:[24,56,67],content:[54,65,67],control:[24,25,26,54,55,60,63],control_curv:63,controlcurveindex:63,controlcurveindexparamet:[12,63],conveni:[55,67],convert:[11,13,26,32,53,56],cookbook:65,copi:68,copyright:68,core:[30,31,45,47,48,56,66,67,69],correct:66,correspond:[26,63,66,67],cosin:2,cost:[26,34,52,55,62,63,67,69],could:[60,69],cover:68,creat:[50,55,60,66,67,69],create_directori:50,creation:60,critic:62,cryptic:67,css:56,csv:[28,67],csvfile:28,current:[13,16,24,62,67],curv:[24,25,26,30,31,47,48,54,55,60,63],custom:[61,63],customise_model:57,cython:66,d3j:56,dai:[2,11,23,32,53,67,69],daili:[8,62,63,67,69],dailyprofileparamet:26,data:[4,22,28,50,55,56,59,61,65,67,69],databas:[22,50],datafram:[9,32,54,62,67],dataset:[22,62],date:[62,67],datetim:69,dc1:62,debug:65,dec:62,decemb:67,decim:63,decod:67,deficit:[10,54],defin:[10,50,55,62,63,67,69],demand1:62,demand2:62,demand:[13,60,61,64,65,67,69],demand_baselin:63,demand_factor:63,demand_max_flow:63,demand_profil:63,demand_saving_factor:[60,63],demand_saving_level:63,demonstr:67,densiti:[11,32,53],depend:[60,63,65],deriv:56,descend:[58,59],describ:[56,63,67],descript:67,desir:62,desktop:67,destroi:59,detail:[60,67,68],determin:62,dev:66,develop:65,deviat:30,dict:[50,56],differ:[11,16,21,29,30,31,32,47,48,51,53,62,67],dimens:30,direct:67,directli:[62,67],directori:[50,66,67],discharg:55,discontinu:2,discuss:67,disk:62,displai:56,distribut:[55,66,68],document:[55,60,62,63,69],doe:[10,22,32,53,60],doesn:69,domain:[54,65],don:69,done:66,doubl:[11,32,53,67],downstream:55,draw:56,draw_graph:56,drive:66,durat:[30,31,47,48,54],dure:[10,53,56,62,63,66],dyld_library_path:66,each:[11,21,30,31,32,47,48,50,53,56,62,63,64,67],easiest:66,edg:[65,69],effici:[11,14,15,32,53],either:[66,68],elev:[11,32,53],elsewher:63,empti:69,enclos:67,end:[63,67,69],energi:[11,32,53],energy_unit_convers:[11,32,53],enough:60,ensembl:21,ensur:55,enter:[11,32,53],entir:22,entitl:68,env:67,environ:66,equal:[27,69],equat:[11,32,53,63],equival:[60,63],error:65,evalu:[10,60,62],evapor:60,even:68,event:56,everi:50,exampl:[13,26,60,63,65,66,67],exce:69,excel:62,except:[21,50,63,67],expect:[62,63,67],explan:60,explicitli:69,extend:65,extens:[62,66],extern:[61,65,66,67],extra:55,extra_slot:55,extract:56,fact:67,factor:[4,11,13,32,34,52,53,55,63,69],fail:67,failur:63,fall:30,fals:56,fast:[62,65],fdc:[30,31,47,48],fdc_agg_func:[30,31,47],feb:62,fifth:68,figur:63,file:[22,28,50,54,56,62,66,67],filenam:[22,50,62],fill:55,filter:50,filter_kwd:50,fine:66,first:[26,50,66,67,69],fit:68,fix:[55,62],flag:66,floor:68,flow:[10,11,29,30,31,32,34,45,47,48,50,51,52,53,54,55,60,62,67,69],flow_unit_convers:[11,32,53],folder:67,follow:[11,32,53,59,60,62,63,66],footnot:65,forc:55,forest:69,forg:66,form:63,format:[61,65,69],formul:65,formula:62,found:[60,67],foundat:68,frame:64,franklin:68,free:[65,68],from:[0,1,2,4,11,22,28,30,32,50,53,55,58,59,62,65,67,69],front:68,full:[26,50,63],func:60,fundament:67,further:[63,69],futur:66,gain:60,gaug:[55,67],gcc:66,gener:[11,65,68],generalis:65,get:[66,69],get_flow:55,git:66,github:66,give:[10,11,32,53,63],given:[11,14,15,21,22,32,47,50,53,60,62,63,67],glpk:[66,67],gnu:68,going:62,good:66,grant:68,graph:56,greater:27,groundwat:67,group:60,gw_flow:67,h5file:[22,50],hand:67,handl:[22,50,60],harmon:2,has:[32,55,62,63,66,67,69],hat:63,have:[10,23,30,55,62,67,68,69],haven:69,hdf5:[54,62],hdf:22,head:[11,32,53,55],header:66,height:56,help:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53,63],helper:57,here:[11,32,53],hierarchi:67,high:30,hire:63,holder:25,homebrew:66,hope:68,host:66,how:[63,69],http:66,hydro:54,hydrolog:55,hydropow:[11,32,53,54],hydropowerrecord:[11,53],hydropowertargetparamet:[32,53],hydrpow:32,identifi:55,idx:67,illustr:63,impli:68,implicitli:63,impos:63,inc:68,includ:[60,66,67,68,69],index:[0,5,12,13,22,25,28,54,60,63],index_col:[62,67],index_paramet:[13,63],indexedarrai:63,indexedarrayparamet:12,indexparamet:[0,1,13,27,60,63],indirectli:62,individu:[4,60],inflow:60,inform:[67,69],init:55,initi:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53,67],initial_volum:[26,67],inlin:[55,67],inplac:66,input:[55,56,60,67,69],insid:[50,67],instal:65,instanc:[11,25,32,53,59,67],instead:[56,62,66,67],instruct:66,integ:[60,63],intend:[10,11,55,65],intent:55,interest:69,interfac:22,intermedi:[50,67],intern:8,interpol:26,interv:69,invari:68,invers:11,isn:69,item:[50,67],iter:[0,1,5,7,8,13,24,25,28,50,55],its:[55,56,60,62],itself:[11,32,53],jame:68,jan:62,januari:[60,67],javascript:67,john:67,joshua:68,json:[56,60,62,65,69],julien:2,jupyt:[56,66],just:63,juyter:56,keep:66,kei:[62,67],keyword:[28,50,62,67],kind:[60,62],kwarg:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,55,57],label:56,lag:66,lake:67,lambda:60,languag:67,larg:[22,62],last:[23,26,46,62,67,69],later:[66,68],leakag:60,leap:2,least:[11,66],len:26,length:[2,5,7,26,30,55],less:[11,55,69],let:69,level1:63,level2:63,level:[13,57,62,63,67],lib:[66,67],libglpk:66,libgmp3:66,liblpsolve55:66,librari:[28,66],library_inc:66,library_lib:66,licens:65,like:[0,1,60,67],likelihood:63,limit:69,line:[66,67],linear:[64,66],linearli:26,link:[55,62,67],linux:65,list:[0,1,26,30,62,63,66,67],littl:10,llvm:66,load:[22,55,62,67,69],locat:66,london:62,look:62,lookup:62,losslessli:67,low:30,lower:[11,30,63],lower_target_fdc:30,lp_solv:66,lpsolv:66,maco:66,made:[60,67],mai:[26,55,63,66,67],make:50,make_model:57,makedir:50,manag:66,manchest:68,mani:62,manual:66,mar:62,markup:67,matplotlib:66,max:[0,1,61],max_flow:[10,11,29,51,55,62,63,67,69],max_flow_oxford:62,max_volum:[26,67],maximum:[14,17,60,67,69],maxparamet:61,mean:[1,2,10,34,45,46,61,62,63],median:61,memori:[22,59],merchant:68,metadata:[50,65,69],method:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,55,69],min:[0,1,61],min_flow:[11,55],min_head:11,min_volum:67,miniconda3:67,minim:65,minimum:[11,15,18,55,60,67,69],minimum_vers:69,minparamet:61,minu:2,minut:66,miss:69,mistak:67,mode:[50,66],model:[9,10,11,22,26,28,29,30,31,32,45,47,48,50,51,53,55,56,57,59,62,63,65,69],model_constraint:57,model_object:57,model_vari:57,model_variable_map:57,modelcach:57,modifi:[66,68],modul:[54,56,62,67],moea:54,month:[4,47,63],monthli:[16,21,63,67],monthly_demand_profil:60,monthlyparamet:60,monthlyprofil:[62,63,67],monthlyprofileparamet:[21,26],more:[14,15,23,26,55,60,63,67,68],most:[11,62,67],mouseov:56,mrf:[55,67],mrf_cost:[55,67],mrf_profil:67,msvc:66,multipl:[4,25,50,54,55,62,67],multipli:63,multisplitlink:55,must:[0,1,2,8,30,31,47,48,55,62,66,67],name:[22,45,50,55,56,60,62,63,67,69],need:[60,66,67,69],neg:[17,18,19,55,60],negativemax:60,negativemaxparamet:61,negativeparamet:61,net:60,network:[55,56,65,69],networkx:66,next:69,node:[10,11,22,24,26,28,29,30,31,34,45,47,48,50,51,52,55,56,60,62,63,65,69],non:[2,60,66],none:[11,28,32,50,53,56],normal:63,notat:67,note:[10,11,13,32,53,66],notebook:[54,65],num_input:67,num_output:67,number:[27,45,55,67],numer:[47,62],numpi:[8,30,31,47,48,54,60,66],numpyarraynoderecord:[10,69],obj:67,object:[22,24,28,50,55,57,62,67],occur:[11,69],often:[26,63,67],onc:62,one:[0,1,55,60,63,66,67],onli:[55,60,62,66,67],open:[22,50],open_fil:50,oper:[34,52,60],optimis:[54,60,65],option:[9,24,30,31,45,47,48,66,68],order:[30,62,63,67,69],org:66,origin:60,other:[10,54,55,60,67],otherwis:67,our:69,output:[60,62,63,67,69],overal:67,overview:65,oxford:62,oxford_demand:62,packag:[28,54,65],pair:67,panda:[9,62,66,69],param:[13,63],paramet:[28,30,31,32,45,46,47,48,50,53,54,55,56,59,61,62,63,65],pars:[62,67],parse_d:[62,67],part:55,parti:69,particular:[11,68],particularli:62,pass:[26,28,50,62,66,67],path:[22,28,50,56,66],pattern:60,pdf:63,per:[4,11,21,32,53,55],percentag:24,percentil:[30,31,47,48,60],perform:2,perhap:63,period:[2,67],permiss:68,perturb:4,phase:2,piecewiselink:55,place:66,plan:66,platypu:57,plu:62,png:63,poor:63,popul:62,posit:[2,30,60],possibl:[66,67],power:[32,53,54],practic:62,prebuilt:66,prefer:50,present:62,previou:[45,62],previous:62,print:69,problem:[65,67,69],proceed:66,process:62,product:[0,1,11,32,53,61,63],profil:[8,16,21,23,54,60,63,67],program:[66,68],programm:64,programmat:67,project:66,properti:[67,69],proport:55,provid:[8,12,16,21,34,50,52,55,66,67],publish:68,pull:66,purpos:68,pytabl:[22,50,62,66],pytest:66,python3:67,python:[28,60,63,65,66,67],pywr:[56,58,59,62,63,64,67,68,69],pywr_json_to_d3_json:56,pywr_model_json:57,pywr_model_to_d3_json:56,queri:24,quicker:60,quit:67,quot:67,rainfal:62,rais:67,rang:[30,31,47,48],rate:[11,32,53],rather:[53,55,62,63,66],ratio:55,raw_decod:67,read:[22,62],read_excel:62,read_xxx:62,readabl:60,readi:69,real:62,receiv:[68,69],recent:67,recip:66,recognis:62,recommend:[62,66],record:[10,11,54,65,69],redistribut:68,reduc:63,reduct:63,refer:[50,55,60,62,65],referenc:[62,67],rel:[50,67],relat:[26,63],releas:66,relev:66,reli:24,reload:62,remov:[0,1,66,69],repeat:[8,67],repres:[8,11,26,55,63,67],request:[10,66],requir:[11,22,55,60,62,66,67],resampl:[9,62],reservoir:[26,55,60,63],reservoira:67,reservoirb:67,reset:62,residu:[55,67],resolut:8,resourc:[63,65],respect:[26,63,66],rest:63,restrict:[61,63,65],result:[59,69],river:[54,67],riverdomainmixin:55,rivergaug:[55,67],riversplit:55,riversplitwithgaug:55,root:50,rout:[50,55],routes_flow:50,rpath:66,run:[22,32,53,57,59,62,66,67,69],runtim:66,same:[2,5,7,21,30,55,60],satisfi:[66,69],save:[13,28,32,50,53,60,62],scalar:67,scale:[34,52],scan_onc:67,scenario:[3,4,5,7,9,21,22,28,30,31,47,48,50,53,69],scenario_index:28,scenariomonthlyprofileparamet:16,scipi:66,script:66,sdc_agg_func:48,season:47,second:[22,50],section:[60,62,63,67,68,69],see:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,62,66,67,68,69],seen:66,self:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53,67],sensit:67,separ:62,seri:[2,9],servic:66,set:[0,1,11,66,69],setup:[60,62,66],sever:[63,66],shape:4,shift:2,shorter:60,should:[5,7,11,26,32,47,53,56,60,62,66,67,68],shown:[60,62],signatur:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53],similar:[50,55,66],simpl:[54,55,67],simple_data:62,simplest:69,simpli:[11,32,53],singl:[5,7,14,15,24,60],sit:55,size:[4,5,7],slot:[55,67],slot_nam:55,small:2,smith:67,snippet:63,snorf:67,snorfalorpagu:66,soft:67,softwar:65,solut:66,solv:[64,66],solver:[10,65,66],some:[56,60,63,66,67,69],sometim:67,somewhat:67,sourc:[62,63,65],sourceforg:66,space:67,special:66,specialis:55,specif:[50,63,66,67],specifi:[47,62,63,66,67],speed:62,split:55,standard:[28,66],start:[66,67,69],state:63,station:55,statist:[50,54],stdin:67,step:[11,16],still:[62,66,69],storag:[24,25,26,48,55,63],storage_nod:[24,25,26,63],store:[50,59,62],str:[0,1,28,30,31,45,47,48,56],strateg:63,street:68,strict:67,string:[22,50,56,62,67],structur:[56,65],style:[30,31,47,48],stylesheet:56,subclass:[55,58,59],submodul:54,subsampl:62,subtyp:67,successfulli:66,sudo:66,suffici:67,sum:[0,1,61],summer:63,superior:62,suppli:[55,63,64,67,69],support:[30,31,47,48,61],svg:56,syntax:65,system:63,tabl:[22,50,56,61],tablesarrayparamet:62,tabular:62,take:[14,15,17,18,19],taken:[4,66],target:[11,30],technic:69,teddington:67,tell:69,term:68,test:[65,67],text:68,than:[11,23,27,55,62,63,66,67,69],thei:[26,60],theme:62,therefor:[4,22],thereof:50,thi:[0,1,2,3,5,7,8,10,11,13,14,15,22,28,30,31,32,47,48,50,53,55,60,62,63,66,67,68,69],those:11,three:[26,60,62,63,67],threshold:[14,15,17,18,27,60],through:69,throughout:63,time:[3,4,5,7,11,16,50,62,63,67],timedelta:69,timeseri:[4,9,53,60],timestamp:62,timestep:[3,4,10,32,45,46,55,62,63,64,67,69],timestepp:[65,69],titl:[67,69],to_datetim:69,to_hdf:62,tomlinson:68,top:63,total:[8,11,29,32,34,51,52,53],totalhydroenergyrecord:[11,32],traceback:67,track:10,trail:67,transform:[11,32,53],translat:67,travi:66,trigger:66,trivial:69,truthi:60,tupl:50,turbin:[11,32,53],turbine_elev:[11,32,53],tutori:65,two:[60,62,63,67,69],type:[0,1,2,3,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21,23,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,51,52,53,60,62,63,67,69],typic:55,unconstrain:55,under:68,underli:55,underneath:50,understand:63,unit:[11,32,53,66],univers:68,unusu:10,updat:62,upper:[11,30],upper_target_fdc:30,upstream:55,url:[62,67],usa:68,usag:61,use:[13,22,24,30,31,47,48,56,60,63,66,67,69],used:[10,11,24,30,31,32,47,48,50,53,56,59,60,62,63,67],useful:[22,50,62,66,68],usefulli:67,user:[50,55,62,67],uses:[11,13,28,32,50,53],using:[0,1,2,3,4,11,22,32,53,56,60,62,63,66,67,69],usr:66,usual:63,util:[54,65],valid:[62,69],valu:[0,1,2,3,4,5,7,8,10,11,14,15,16,17,18,25,26,28,30,31,32,46,47,48,53,60,62,63,67],valueerror:67,vari:[3,4,5,7,63,67],variabl:66,veri:[62,69],version:[14,15,55,66,68],via:[55,60,62],visualis:56,volum:[24,26,63,67],wai:[62,66],want:66,warn:62,warrant:60,warranti:68,water:[11,32,53,55,63],water_elev:[11,32,53],water_elevation_paramet:[11,32,53],websit:66,week:[23,62],weekli:[23,62],well:67,wet:67,when:[50,55,60,62,63,66,67],where:[10,11,14,15,22,27,50,55,62,63,67],wherea:67,whether:60,which:[0,1,2,4,13,16,21,25,28,30,60,62,66,67,69],white:67,whole:23,width:56,window:65,winglpk:66,winter:63,within:[5,7,69],without:68,work:[11,32,53,62,63,66,67],write:[67,68],writer:28,written:[65,66],xlrd:66,xls:62,xlsx:62,yaml:67,year:[2,23,27,63,67],yesterdai:10,yet:67,you:[10,62,66,68],your:[66,68],yourself:66,zero:[10,11,30,60,69],zeroth:[2,10]},titles:["pywr.parameters.AggregatedIndexParameter","pywr.parameters.AggregatedParameter","pywr.parameters.AnnualHarmonicSeriesParameter","pywr.parameters.ArrayIndexedParameter","pywr.parameters.ArrayIndexedScenarioMonthlyFactorsParameter","pywr.parameters.ArrayIndexedScenarioParameter","pywr.parameters.ConstantParameter","pywr.parameters.ConstantScenarioParameter","pywr.parameters.DailyProfileParameter","pywr.parameters.DataFrameParameter","pywr.parameters.DeficitParameter","pywr.parameters.HydropowerTargetParameter","pywr.parameters.IndexParameter","pywr.parameters.IndexedArrayParameter","pywr.parameters.MaxParameter","pywr.parameters.MinParameter","pywr.parameters.MonthlyProfileParameter","pywr.parameters.NegativeMaxParameter","pywr.parameters.NegativeMinParameter","pywr.parameters.NegativeParameter","pywr.parameters.Parameter","pywr.parameters.ScenarioMonthlyProfileParameter","pywr.parameters.TablesArrayParameter","pywr.parameters.WeeklyProfileParameter","pywr.parameters.control_curves.BaseControlCurveParameter","pywr.parameters.control_curves.ControlCurveIndexParameter","pywr.parameters.control_curves.ControlCurveInterpolatedParameter","pywr.recorders.AnnualCountIndexParameterRecorder","pywr.recorders.CSVRecorder","pywr.recorders.DeficitFrequencyNodeRecorder","pywr.recorders.FlowDurationCurveDeviationRecorder","pywr.recorders.FlowDurationCurveRecorder","pywr.recorders.HydropowerRecorder","pywr.recorders.IndexParameterRecorder","pywr.recorders.MeanFlowNodeRecorder","pywr.recorders.MinimumThresholdVolumeStorageRecorder","pywr.recorders.MinimumVolumeStorageRecorder","pywr.recorders.NodeRecorder","pywr.recorders.NumpyArrayIndexParameterRecorder","pywr.recorders.NumpyArrayLevelRecorder","pywr.recorders.NumpyArrayNodeRecorder","pywr.recorders.NumpyArrayParameterRecorder","pywr.recorders.NumpyArrayStorageRecorder","pywr.recorders.ParameterRecorder","pywr.recorders.Recorder","pywr.recorders.RollingMeanFlowNodeRecorder","pywr.recorders.RollingWindowParameterRecorder","pywr.recorders.SeasonalFlowDurationCurveRecorder","pywr.recorders.StorageDurationCurveRecorder","pywr.recorders.StorageRecorder","pywr.recorders.TablesRecorder","pywr.recorders.TotalDeficitNodeRecorder","pywr.recorders.TotalFlowNodeRecorder","pywr.recorders.TotalHydroEnergyRecorder","Pywr reference documentation.","pywr.domains package","Notebook Utilities","pywr.optimisation package","Parameters","Recorders","Aggregated parameters","Pywr cookbook examples","Using external data","Demand saving","Problem formulation","Welcome to Pywr\u2019s documentation!","Installing Pywr","JSON model format","License","Tutorial"],titleterms:{"class":[58,59],"function":60,Using:62,aggreg:60,aggregatedindexparamet:0,aggregatedparamet:1,all:60,anaconda:66,ani:60,annual:58,annualcountindexparameterrecord:27,annualharmonicseriesparamet:2,arrai:[58,59],arrayindexedparamet:3,arrayindexedscenariomonthlyfactorsparamet:4,arrayindexedscenarioparamet:5,base:[58,59],basecontrolcurveparamet:24,basic:60,binari:66,combin:58,constant:62,constantparamet:6,constantscenarioparamet:7,content:[55,57],continu:66,control:58,control_curv:[24,25,26],controlcurveindexparamet:25,controlcurveinterpolatedparamet:26,cookbook:61,csv:62,csvrecord:28,curv:[58,59],custom:60,dailyprofileparamet:8,data:62,datafram:58,dataframeparamet:9,debug:67,deficit:59,deficitfrequencynoderecord:29,deficitparamet:10,demand:[62,63],demands_monthli:62,depend:66,develop:66,document:[54,65,67,68],domain:55,durat:59,edg:67,error:67,exampl:[61,62,69],extern:62,file:59,flow:59,flowdurationcurvedeviationrecord:30,flowdurationcurverecord:31,footnot:67,format:[62,67],formul:64,from:66,gener:66,hdf5:58,hydro:59,hydropow:58,hydropowerrecord:32,hydropowertargetparamet:11,index:[59,62],indexedarrayparamet:13,indexparamet:12,indexparameterrecord:33,instal:66,integr:66,json:67,licens:68,linux:66,max:60,maxparamet:[14,60],mean:60,meanflownoderecord:34,median:60,metadata:67,min:60,minim:69,minimumthresholdvolumestoragerecord:35,minimumvolumestoragerecord:36,minparamet:[15,60],model:67,modul:[55,57],moea:57,monthli:62,monthlyprofileparamet:16,multi:62,multiindex_data:62,multipl:58,negativemaxparamet:[17,60],negativeminparamet:18,negativeparamet:[19,60],node:67,noderecord:37,non:67,notebook:56,numpi:59,numpyarrayindexparameterrecord:38,numpyarraylevelrecord:39,numpyarraynoderecord:40,numpyarrayparameterrecord:41,numpyarraystoragerecord:42,optimis:57,other:58,overview:67,packag:[55,57,66],paramet:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,58,60,67],parameterrecord:43,power:59,problem:64,product:60,profil:[58,62],pywr:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,57,61,65,66],record:[27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,59],refer:54,river:55,rollingmeanflownoderecord:45,rollingwindowparameterrecord:46,save:63,scenariomonthlyprofileparamet:21,seasonalflowdurationcurverecord:47,simpl:58,softwar:68,solver:67,sourc:66,statist:59,storag:67,storagedurationcurverecord:48,storagerecord:49,structur:67,submodul:[55,57],sum:60,support:62,syntax:67,tabl:62,tablesarrayparamet:22,tablesrecord:50,test:66,timeseri:62,timeseries1:62,timestepp:67,totaldeficitnoderecord:51,totalflownoderecord:52,totalhydroenergyrecord:53,tutori:69,ubuntu:66,usag:60,util:56,weeklyprofileparamet:23,welcom:65,window:66}})